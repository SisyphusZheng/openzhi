/**
 * @lessjs/blog - Blog plugin for LessJS
 *
 * SSG plugin that scans markdown files and generates blog routes.
 * Usage: `import { lessBlog } from '@lessjs/blog'`
 *
 * v0.8 scope: .md → routes → list/post pages. No MDX, comments, or tags system.
 */

import type { Plugin } from 'vite';
import type { LessBlogOptions } from './types.ts';
import { initBlogData } from './blog-data.ts';
import { createLogger } from '@lessjs/core/logger';
import process from 'node:process';

const log = createLogger('blog');

export type { BlogPost, BlogPostFrontmatter, LessBlogOptions } from './types.ts';
export { parseMarkdownFile, slugFromFilename } from './markdown.ts';
export { generateBlogRoutes, scanPosts } from './routes.ts';
export { getBlogOptions, getPostBySlug, getPosts, initBlogData } from './blog-data.ts';

/**
 * LessJS Blog Vite plugin.
 * Scans .md files, initializes blog data store, and prepares routes.
 *
 * The actual route rendering is handled by:
 * - `blog/index.ts` — uses getPosts() to render the listing
 * - `blog/[slug].ts` — uses getPostBySlug(slug) to render individual posts
 *
 * @example
 * ```ts
 * import { less, lessBlog } from '@lessjs/core';
 *
 * export default defineConfig({
 *   plugins: [
 *     less(),
 *     lessBlog({ contentDir: 'content/blog', basePath: '/blog' }),
 *   ],
 * });
 * ```
 */
export function lessBlog(options?: LessBlogOptions): Plugin {
  const contentDir = options?.contentDir ?? 'posts';
  const basePath = options?.basePath ?? '/blog';

  return {
    name: 'less:blog',

    async buildStart() {
      // Initialize the global blog data store.
      // This makes posts available to [slug].ts and index.ts route components.
      const { postCount } = await (async () => {
        const result = await initBlogData(options);
        return { postCount: result.posts.length };
      })();

      log.info(
        `${postCount} post(s) found in ${contentDir}, base path: ${basePath}`,
      );

      // Write blog options to .less/ so Phase 3 (build-ssg) can re-initialize
      // the blog data store in its own Vite SSR server instance.
      // Phase 1 and Phase 3 use different Vite instances with separate module graphs,
      // so the blog data store populated here is not visible in Phase 3.
      try {
        const { mkdirSync, writeFileSync } = await import('node:fs');
        const { join } = await import('node:path');
        const root = process.cwd();
        const lessDir = join(root, '.less');
        mkdirSync(lessDir, { recursive: true });
        writeFileSync(
          join(lessDir, 'blog-options.json'),
          JSON.stringify({ contentDir, basePath }),
          'utf-8',
        );
      } catch {
        // Non-fatal — dynamic route expansion will be skipped if options missing
      }
    },

    config() {
      return {
        define: {
          __LESS_BLOG_BASE_PATH__: JSON.stringify(basePath),
        },
      };
    },
  };
}

export default lessBlog;
