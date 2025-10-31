Pixel Icons

A pixel art icon theme for Visual Studio Code, giving your editor a retro feel.

## Installation

1.  Open the **Extensions** sidebar in VS Code (`Ctrl+Shift+X`).
2.  Search for `Pixel Icons`.
3.  Click **Install**.

## Activation

1.  Open the **Command Palette** (`Ctrl+Shift+P`).
2.  Search for and select `Preferences: File Icon Theme`.
3.  Choose **Pixel Icons** from the list.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Setup

1.  **Enable pnpm** using corepack (if you haven't already):

    ```bash
    corepack enable
    ```

1.  **Fork** the repository on GitHub.

1.  **Clone** your fork locally:

    ```bash
    git clone https://github.com/YOUR-USERNAME/vscode-pixel-icons.git
    cd vscode-pixel-icons
    ```

1.  **Install** the dependencies:

    ```bash
    pnpm install
    ```

### Development Workflow

1.  Open the project folder in VS Code.
1.  Press `F5` to open a new VS Code window with the icon theme loaded (the Extension Development Host).
1.  To see icon changes, you may need to reload the development window (`Developer: Reload Window` from the Command Palette).

### Adding New Icons

1.  **Create the Icon:**
    - Create your new icon as a PNG file.
    - The standard size is 16x16 pixels, try to keep it consistent with the existing icons.
    - Save the icon in the `assets/icons/` directory. If it's for a folder, place it in `assets/icons/folders/`.

1.  **Define the Icon:**
    - Open `assets/theme.json`.
    - Add a new entry in the `iconDefinitions` section. The key should be a descriptive name for your icon, and the `iconPath` should point to your new PNG file.

    ```json
    "iconDefinitions": {
      "new_file": {
        "iconPath": "./icons/new_icon.png"
      },
      // ... existing definitions
    }
    ```

1.  **Map the Icon:**
    - Still in `assets/theme.json`, map your new icon definition to file types, file names, or folder names.

    - **For file extensions:**

      ```json
      "fileExtensions": {
        "newext": "new_file"
      }
      ```

    - **For full file names (e.g., config files):**

      ```json
      "fileNames": {
        "new.config.js": "new_file"
      }
      ```

    - **For folders:**
      ```json
      "folderNames": {
        "new-folder": "new_folder"
      },
      "folderNamesExpanded": {
        "new-folder": "new_folder_expanded"
      }
      ```

1.  **Test your changes** by running the extension (F5) and ensuring your new icon appears correctly.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
