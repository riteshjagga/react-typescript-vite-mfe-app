# Mono Repo Project

A modern monorepo setup for building modular frontend applications with micro frontend architecture and desktop capabilities.

## Technical Stack

This project leverages a modern frontend technology stack:

- **React** - UI library for building component-based interfaces
- **TypeScript** - Type-safe JavaScript for improved developer experience
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework for styling
- **ShadCN** - Re-usable component library built on Radix UI
- **Electron** - Framework for building cross-platform desktop applications

## Mono Repo Structure

This project uses **npm workspaces** to manage multiple packages and applications in a single repository.

### Workspace Configuration

Workspaces are defined in the root `package.json`:

```json
"workspaces": [
  "apps/*",
  "packages/*"
]
```

### Running Commands in Workspaces

**Run a command in a specific workspace:**

```bash
npm run <script-name> --workspace=apps/shell
npm run dev --workspace=apps/shell
npm run build --workspace=@workspace/shared
npm run test --workspace=apps/shell
```

**Run a command in multiple workspaces:**

```bash
npm run build --workspace=apps/shell --workspace=apps/mfe-account
```

**Run a command in all workspaces:**

```bash
npm run lint --workspaces
npm run test --workspaces
```

**Install dependencies for a specific workspace:**

```bash
npm install <package-name> --workspace=apps/shell
```

**Install dependencies for all workspaces:**

```bash
npm install
```

## Shell and Micro Frontend Architecture

The application follows a micro frontend pattern with lazy loading for optimal performance:

### Applications

- **apps/shell** - Main shell application that orchestrates micro frontends
- **apps/mfe-account** - Account management micro frontend
- **apps/mfe-underwriting** - Underwriting micro frontend

### Integration

Micro frontends are lazily loaded and integrated using **React Router**, allowing each application to be developed, tested, and deployed independently while maintaining a seamless user experience in the shell application.

## Formatting

Code formatting is standardized using Prettier. Configuration is defined at the root level and applied across all workspaces.

### Running Formatting Commands

```bash
# Format all files
npm run format

# Format files in a specific workspace
npm run format --workspace=apps/shell

# Auto-fix formatting issues across all workspaces
npm run format:fix

# Auto-fix formatting issues in a specific workspace
npm run format:fix --workspace=apps/shell
```

**Note:** Replace `apps/shell` with the appropriate workspace name to run these commands for other available workspaces.

## Linting

TypeScript and React linting rules are configured at the root level and can be extended in individual workspaces. Configuration files are located in both the root directory and workspace directories.

### Running Linting Commands

```bash
# Lint all files
npm run lint

# Lint files in a specific workspace
npm run lint --workspace=apps/shell

# Auto-fix linting issues across all workspaces
npm run lint:fix

# Auto-fix linting issues in a specific workspace
npm run lint:fix --workspace=apps/shell
```

**Note:** Replace `apps/shell` with the appropriate workspace name to run these commands for other available workspaces.

## Testing

Tests are run using the configured test runner in each workspace.

### Running Test Commands

```bash
# Run tests in all workspaces
npm run test --workspaces

# Run tests in a specific workspace
npm run test --workspace=apps/shell
```

**Note:** Replace `apps/shell` with the appropriate workspace name to run these commands for other available workspaces.

## Code Quality Conventions

This project uses Git hooks to enforce code quality standards:

### Husky

Git hooks are managed by **Husky**, which is initialized during the `prepare` script.

### Lint-Staged

**lint-staged** runs linters on staged files before commit, ensuring only quality code is committed.

### Git Hooks

- **pre-commit** - Runs lint-staged to check and fix staged files before committing
- **commit-msg** - Validates commit messages to ensure they follow conventional commit standards

## Environment Variables

Environment-specific configurations are managed through `.env` files located in individual app directories:

- `apps/shell/.env`
- `apps/mfe-account/.env`
- `apps/mfe-underwriting/.env`
- `apps/desktop/.env`

Each application may have different environment files for development, staging, and production (e.g., `.env.development`, `.env.production`).

**Note:** Currently only the shell workspace contains these environment variables files. Micro frontend modules (or workspaces) are not yet meant to have standalone development, release cycle and own domain specific deployment. And they would be orchestrated through shell app only.

## Desktop Application

### Electron App

The project includes a desktop application built with **Electron**, located in `apps/desktop`.

### Supported Platforms

The desktop app is configured to create builds for:

- **Windows** - Windows executable and installer
- **macOS** - macOS application bundle and DMG

### Building the Desktop App

```bash
# Build the desktop application (general)
npm run build --workspace=apps/desktop

# Building the application for macOS. Mac machine is mandatory.
npm run build:mac --workspace=apps/desktop

# Building the application for Windows. Windows machine is mandatory.
npm run build:win --workspace=apps/desktop
```

## Root Scripts

The following scripts are available at the root level:

```bash
# Format all files
npm run format

# Auto-fix formatting issues across the monorepo
npm run format:fix

# Lint all files in apps and packages
npm run lint

# Auto-fix linting issues across the monorepo
npm run lint:fix

# Run tests across all workspaces
npm run test --workspaces

# Prepare Git hooks (runs automatically after npm install)
npm run prepare
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server for a specific app:**

   ```bash
   npm run dev --workspace=apps/shell
   ```

3. **Build all applications:**

   ```bash
   npm run build --workspaces
   ```

4. **Run tests:**

   ```bash
   # Run tests in all workspaces
   npm run test --workspaces

   # Run tests in a specific workspace
   npm run test --workspace=apps/shell
   ```

5. **Lint code:**

   ```bash
   # Lint all workspaces
   npm run lint

   # Lint and auto-fix issues
   npm run lint:fix
   ```

## Development Workflow

1. Create a new branch for your feature or fix
2. Make your changes in the appropriate workspace
3. Format your code: `npm run format:fix`
4. Ensure your code passes linting: `npm run lint:fix`
5. Run tests: `npm run test --workspaces` or a particular workspace e.g. `npm run test --workspace=@workspace/shell` depending upon the changes made
6. Commit your changes (hooks will automatically run lint-staged and validate commit message)
7. Push your branch and create a pull request

## Contributing

Please ensure all code follows the established conventions:

- Write meaningful commit messages following conventional commits
- Format your code with `npm run format:fix` before committing
- Ensure all linting checks pass with `npm run lint:fix`
- Ensure all tests pass before submitting
- Update documentation when adding new features or changing existing functionality
