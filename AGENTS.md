# AGENTS.md

## Build/Development Commands
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the Next.js application
- `npm run start` - Start production server

## Technology Stack
- Next.js 15.5.6 with App Router
- React 19.1.0
- TypeScript with strict mode enabled
- Tailwind CSS v4 for styling

## Code Structure
- App Router directory: `src/app/`
- TypeScript entry points: `layout.tsx` and `page.tsx`
- Path alias: `@/*` maps to `./src/*`

## Code Style Guidelines
- Use TypeScript strict mode - type safety is required
- Follow Next.js App Router conventions
- Use Tailwind CSS classes for styling
- Keep React components functional with TypeScript interfaces
- Use the font system from `next/font/google` (Geist is already configured)
- Components should be exported as default functions