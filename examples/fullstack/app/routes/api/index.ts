/**
 * API Routes - Hono RPC
 *
 * This file defines serverless API endpoints.
 * Access via: /api/hello, /api/time, etc.
 */
import { Hono } from 'hono';

const app = new Hono();

app.get('/hello', (c) => {
  return c.json({ message: 'Hello from KISS API!' });
});

app.get('/time', (c) => {
  return c.json({
    time: new Date().toISOString(),
    timestamp: Date.now(),
  });
});

app.get('/echo/:text', (c) => {
  const text = c.req.param('text');
  return c.json({ echo: text });
});

export default app;
