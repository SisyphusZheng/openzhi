# @lessjs/rpc

类型安全 RPC — 基于 Fetch API + AbortController，零框架依赖。

## 安装

```bash
deno add jsr:@lessjs/rpc
```

## 功能

- **`RpcController`**：自动重试、超时控制、请求取消
- **类型安全**：TypeScript 泛型推导请求/响应类型
- **零依赖**：纯 `fetch` + `AbortController`，无 Lit 依赖
- **多运行时**：Deno / Browser / Cloudflare Workers

## 使用

```ts
import { RpcController } from '@lessjs/rpc';

const api = new RpcController({ baseUrl: '/api' });

// GET 请求
const data = await api.call<{ message: string }>('/status');

// POST 请求
const result = await api.call('/submit', {
  method: 'POST',
  body: JSON.stringify({ name: 'LessJS' }),
});
```

## 许可

MIT License
