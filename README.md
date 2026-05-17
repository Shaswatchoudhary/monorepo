# Enterprise Monorepo

Welcome to the **Enterprise Monorepo**, a modern, scalable repository built to manage multiple front-end applications, a backend API, and shared internal packages seamlessly. This project leverages the latest tooling to provide an excellent developer experience, fast build times, and high maintainability.

## 🛠️ Tooling & Tech Stack

This repository is powered by a robust stack of modern development tools:

- **[Turborepo](https://turbo.build/repo)**: High-performance build system for JS/TS monorepos, offering remote caching and parallel execution.
- **[pnpm Workspaces](https://pnpm.io/workspaces)**: Fast, disk space-efficient package manager configured to manage dependencies across all apps and packages.
- **TypeScript**: End-to-end static typing.
- **Next.js 16**: React framework used for our main web application and documentation site.
- **Vite & React 19**: Lightning-fast build tool used for the `blogMore` application.
- **Express.js**: Fast, unopinionated Node.js web framework for our backend API.
- **Prettier & ESLint**: Shared configuration for consistent code formatting and linting across the entire workspace.

## 🏗️ Repository Structure

### Applications (`apps/`)

- **`web`** (Next.js): The main customer-facing web application. Runs on port `3000`.
- **`docs`** (Next.js): Documentation site for internal and external resources. Runs on port `3001`.
- **`blogMore`** (Vite + React): A dedicated blogging and content management platform. Runs on port `5173`.
- **`api`** (Express.js): The core backend service providing RESTful endpoints. Uses ES modules and runs via `nodemon`.

### Shared Packages (`packages/`)

- **`@repo/ui`**: Shared React component library consumed by `web` and other front-end apps.
- **`@repo/utils`**: Shared helper functions and business logic.
- **`@repo/eslint-config`**: Standardized ESLint rules for all workspace projects.
- **`@repo/typescript-config`**: Base `tsconfig.json` files for consistent strictness and compilation settings.

## ✅ What is Done

- **Monorepo Architecture**: Initialized pnpm workspaces and Turborepo configurations (`pnpm-workspace.yaml`, `turbo.json`).
- **Application Scaffolding**: Set up two Next.js apps (`web`, `docs`), one Vite app (`blogMore`), and an Express backend (`api`).
- **Internal Package Linking**: Configured dependencies so applications can natively import from `@repo/ui` and `@repo/utils`.
- **Tooling Standardization**: Integrated Prettier and ESLint globally with workspace-specific extensions.
- **API Environment Fixes**: Successfully migrated the `api` app to ES modules (`"type": "module"`) and corrected workspace linking to allow smooth execution via `turbo run dev`.

## 🚀 What is Upcoming

- **API & Frontend Integration**: Connect the `web` and `blogMore` applications to the local Express `api` service.
- **Database Integration**: Add ORM setup (e.g., Prisma or Drizzle) and database migrations to the `api` package.
- **UI Library Expansion**: Build out accessible, reusable components in `@repo/ui` using Storybook or a similar testing playground.
- **CI/CD Pipeline**: Set up GitHub Actions for automated linting, type-checking, and Turborepo remote caching on PRs.
- **Dockerization & Deployment**: Create `Dockerfile`s for each application to prepare for production deployments on Vercel (frontend) and AWS/Render (backend).

## 💻 Getting Started

To run the project locally, ensure you have Node.js (>=18) and `pnpm` installed.

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm run dev
   ```
   *This command leverages Turborepo to start all applications (`web`, `docs`, `blogMore`, and `api`) simultaneously in parallel.*

3. **Format code:**
   ```bash
   pnpm run format
   ```

4. **Lint and Type-check:**
   ```bash
   pnpm run lint
   pnpm run check-types
   ```
