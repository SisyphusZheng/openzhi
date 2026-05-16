/**
 * Cloudflare Pages Function — /api/term
 *
 * Handles terminal commands for the interactive homepage demo.
 * Deployed as a Pages Function, not part of the SSG build.
 *
 * G11 fix: Command logic extracted to shared/term-commands.ts
 *
 * @see https://developers.cloudflare.com/pages/functions/
 */
import { executeTermCommand } from '../../www/app/shared/term-commands.ts';

export async function onRequest(context: {
  request: Request;
  env: Record<string, string>;
  params: Record<string, string>;
}): Promise<Response> {
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (context.request.method !== 'POST') {
    return new Response(
      JSON.stringify({ output: ['<span style="color:#ef4444;">method not allowed</span>'] }),
      {
        status: 405,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      },
    );
  }

  let cmd = '';
  try {
    const body: { cmd?: string } = await context.request.json();
    if (body.cmd !== undefined && typeof body.cmd !== 'string') {
      return new Response(
        JSON.stringify({
          output: ['<span style="color:#ef4444;">invalid command: expected string</span>'],
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }
    cmd = body.cmd || '';
  } catch {
    return new Response(
      JSON.stringify({ output: ['<span style="color:#ef4444;">invalid json</span>'] }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const output = executeTermCommand(cmd);

  return new Response(JSON.stringify({ output }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}
