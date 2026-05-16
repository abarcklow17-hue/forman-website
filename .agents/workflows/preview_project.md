# Preview Project

This workflow starts the NextJS development server for local preview.

## Preview Steps
1. Install dependencies if not already done:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev -- --port $PORT --hostname 0.0.0.0
   ```
   *(Note: `$PORT` is usually provided by the Antigravity preview environment. If running locally outside the IDE, omit the `--port` flag or replace it with a specific port like `3000`.)*
