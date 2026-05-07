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
import { generateBlogRoutes } from './routes.ts';

export type { BlogPost, BlogPostFrontmatter, LessBlogOptions } from './types.ts';
export { parseMarkdownFile, slugFromFilename } from './markdown.ts';
export { generateBlogRoutes, scanPosts } from './routes.ts';

/**
 * LessJS Blog Vite plugin.
 * Scans .md files and generates blog routes during build.
 *
 * @example
 * ```ts
 * import { less, lessBlog } from '@lessjs/core';
 *
 * export default defineConfig({
 *   plugins: [
 *     less(),
 *     lessBlog({ contentDir: 'posts', basePath: '/blog' }),
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
      const routes = await generateBlogRoutes(options);
      const postCount = routes.posts.length;
      console.log(
        `[LessJS Blog] ${postCount} post(s) found in ${contentDir}, base path: ${basePath}`,
      );
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
