# Fullstack Example

A complete KISS Framework example demonstrating:

- **SSG + DSD**: Static Site Generation with Declarative Shadow DOM
- **API Routes**: Serverless endpoints with Hono RPC
- **Islands Architecture**: Interactive components hydrate on demand
- **@kissjs/ui**: KISS UI component library

## Quick Start

```bash
# Development
deno task dev

# Build for production
deno task build

# Preview production build
deno task preview
```

## Project Structure

```
app/
├── routes/
│   ├── index.ts        # Home page (SSG)
│   └── api/
│       └── index.ts    # API Routes (Hono)
└── islands/
    └── counter.ts      # Interactive Island
```

## API Endpoints

- `GET /api/hello` - Returns a greeting message
- `GET /api/time` - Returns current server time
- `GET /api/echo/:text` - Echoes back the provided text

## KISS Architecture Compliance

This example follows KISS Architecture constraints:

- **Knowledge (K)**: SSG generates static HTML + DSD
- **Isolated (I)**: Islands are independently hydratable
- **Semantic (S)**: Baseline HTML works without JS
- **Static (S)**: Pure static files, no runtime server needed

## Learn More

- [KISS Documentation](https://kiss.js.org)
- [GitHub Repository](https://github.com/SisyphusZheng/kiss)
