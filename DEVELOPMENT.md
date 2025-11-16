# Development

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Setup

1. **Enable pnpm** using corepack (if you haven't already):

   ```bash
   corepack enable
   ```

2. **Clone** the repository:

   ```bash
   git clone https://github.com/Azganoth/vscode-pixel-icons.git
   cd vscode-pixel-icons
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
