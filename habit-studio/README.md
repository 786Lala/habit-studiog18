# habit-tracker

## Deploying to GitHub Pages

This project includes a convenience script to publish the production `dist/` build to GitHub Pages using the `gh-pages` package.

Steps:

1. Commit your code and push it to a GitHub repository (e.g. `origin` remote).
2. Run:

```powershell
npm run deploy
```

This runs `npm run build` then publishes the `dist/` folder to the `gh-pages` branch on your repo. Your site will be available at `https://<username>.github.io/<repo>/` (or at the repository GitHub Pages URL provided in the repo settings).

If you want a user/organization site (root), create a repo named `<username>.github.io` and deploy there.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Development (local)

Start the dev server with a stable local port:

```powershell
npm run dev
```

This project configures the dev server to use port 5173 by default, so open http://localhost:5173/ in your browser. If port 5173 is already used on your machine, Vite will show an error and you can either stop the conflicting process or run the server on a different port by running `npx vite --port <port>`.

