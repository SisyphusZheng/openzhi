# KISS Hello World

Minimal example demonstrating KISS Framework basics.

## Quick Start

```bash
# Install dependencies
deno install

# Start dev server
deno task dev

# Build for production
deno task build

# Preview production build
deno task preview
```

## What's Included

- **SSG**: Static Site Generation with Declarative Shadow DOM
- **KISS UI**: Pre-built Web Components (kiss-button, kiss-card)
- **Zero Config**: Works out of the box

## File Structure

```
hello/
├── app/
│   └── routes/
│       └── index.ts    # Home page
├── deno.json           # Deno config
├── vite.config.ts      # Vite config
└── README.md
```

## Learn More

- [KISS Documentation](https://kiss.js.org)
- [JSR Package](https://jsr.io/@kissjs/core)
- [GitHub](https://github.com/SisyphusZheng/kiss)
