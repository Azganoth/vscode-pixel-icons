# Contributing

## Local Setup

1. **Prerequisites**: Node.js and Visual Studio Code.
2. **Enable pnpm** using corepack:
   ```bash
   corepack enable
   ```
3. **Install** dependencies:
   ```bash
   pnpm install
   ```

## Workflow

1. **Open** the project in VS Code.
2. **Press `F5`** to launch the Extension Development Host. This opens a new window with the theme loaded.
3. **Reload** the development window (`Ctrl+R` or `Command+R`) to see changes after modifying files.

## Adding New Icons

1. **Create the Icon:**
   - Create a 16x16 PNG file in `assets/icons/`.
   - Ensure it uses the pixel art style (no anti-aliasing/blur).
2. **Define & Map:**
   - Open `assets/theme.json`.
   - Add the definition in `iconDefinitions`.
   - Map it in `fileExtensions`, `fileNames`, or `folderNames`.
3. **Generate Samples:**
   - Run the following command to generate dummy files in the `samples/` directory for testing:
     ```bash
     pnpm generate-samples
     ```
4. **Test:**
   - Press `F5` to launch the Extension Development Host.

## Common Commands

### Development

- Compile and watch TypeScript: `pnpm run watch`
- Generate sample workspace: `pnpm generate-samples`

### Building

- Compile extension: `pnpm run compile`

### Linting & Formatting

- Lint (ESLint): `pnpm run lint`
- Format (Prettier): `pnpm run format`

### Testing & Verification

- VS Code Extension tests: `pnpm test`

## Git Conventions

- Format commit messages according to the Conventional Commits specification without the scope part (e.g., `feat: add js icon`, `fix: correct folder mapping`).
