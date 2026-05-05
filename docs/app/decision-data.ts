import adr0001 from '../decisions/0001-keep-hono-vite-dev-server.md?raw';
import adr0002 from '../decisions/0002-less-compiler-eliminate-lit.md?raw';
import adr0003 from '../decisions/0003-pwa-support.md?raw';
import adr0004 from '../decisions/0004-blog-system.md?raw';

export interface DecisionDoc {
  id: string;
  title: string;
  status: string;
  path: string;
  summary: string;
  source: string;
}

export const DECISIONS: DecisionDoc[] = [
  {
    id: '0001',
    title: 'Keep @hono/vite-dev-server',
    status: 'Kept',
    path: '/decisions/0001-keep-hono-vite-dev-server',
    summary: 'Retain the official Hono x Vite dev integration because it has zero production cost.',
    source: adr0001,
  },
  {
    id: '0002',
    title: '.less Compiler',
    status: 'Draft',
    path: '/decisions/0002-kiss-compiler-eliminate-lit',
    summary:
      'Explore an optional compiler that emits vanilla Custom Elements without framework runtime.',
    source: adr0002,
  },
  {
    id: '0003',
    title: 'PWA Support',
    status: 'Partially Implemented',
    path: '/decisions/0003-pwa-support',
    summary:
      'Use NetworkFirst for HTML/API and CacheFirst for assets instead of full HTML precache.',
    source: adr0003,
  },
  {
    id: '0004',
    title: '@lessjs/blog',
    status: 'Draft',
    path: '/decisions/0004-blog-system',
    summary: 'Plan a standalone Markdown blog package after the serverless fullstack milestone.',
    source: adr0004,
  },
];
