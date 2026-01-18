# AI Coding Guidelines for My Portfolio

## Project Overview
This is a React single-page application (SPA) portfolio built with Vite, TypeScript, and CSS. It features a theme toggle system and modular component architecture.

## Architecture
- **Single Page App**: All sections (Hero, About, Projects, Skills, Contact) render in one page with smooth scrolling
- **Component Structure**: Components in `src/components/`, styles in `src/styles/`
- **Theme System**: Light/dark mode using CSS variables and `data-theme` attribute on `<html>`

## Key Patterns
- **Theme Management**: Use `useState<'light' | 'dark'>` in App.tsx, apply via `document.documentElement.setAttribute('data-theme', theme)`
- **Styling**: CSS variables in `src/styles/theme.css`, global styles in `src/styles/main.css`
- **Component Props**: Pass theme state down to components that need it (e.g., Navbar for toggle)
- **Section Layout**: Use `<section>` with `padding: 80px 10%` class for consistent spacing

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite HMR enabled)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with React hooks and refresh plugins)
- **Preview Build**: `npm run preview`

## TypeScript Configuration
- Strict mode enabled in `tsconfig.app.json`
- Project references: separate configs for app and node code
- JSX: `react-jsx` transform

## Component Examples
- **Theme Toggle**: Implement in Navbar component, call `setTheme` prop
- **Section Components**: Export default function components, import in App.tsx when ready
- **Styling**: Import CSS files in components or App.tsx as needed

## File Organization
- `src/components/`: Reusable UI components
- `src/styles/`: CSS files (theme.css for variables, main.css for globals)
- `src/assets/`: Static assets
- `public/`: Public assets

Focus on completing the portfolio sections while maintaining the theme system and responsive design.