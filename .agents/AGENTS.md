# Vesti Architecture Guidelines

## Core Stack
- **Framework:** React + Vite (Single Page Application)
- **Routing:** React Router DOM
- **Icons:** Lucide React

## Project Structure
- `src/components/`: Reusable UI components (Navbar, Footer, Sidebar, Cards). All pages must inherit Navbar and Footer from here to prevent code duplication.
- `src/pages/`: Full page views (Home, Login, Signup, Dashboard).
- `public/assets/`: Static assets (images, raw CSS) that bypass the Vite bundler but are served directly.
- Legacy `.html` files in the root are deprecated and actively being migrated to React components.

## Behavioral Constraints
- **Routing:** Do NOT use `href="#"` or raw `<a href="/...">` tags for internal navigation. Always use React Router's `<Link to="...">` component to prevent full page reloads.
- **Styling:** Global styles should be placed in `src/index.css`. Legacy styles are currently loading from `public/assets/css/` to preserve the original UI pixel-perfect.
- **Component Reusability:** If a piece of UI (like a button, input field, or header) appears in more than 2 places, extract it into `src/components/`.
