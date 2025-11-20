// @ts-check

/**
 * @typedef {Object} IconItem
 * @property {string} name
 * @property {string|string[]} src
 */

/**
 * @typedef {Object} Section
 * @property {string} title
 * @property {IconItem[]} icons
 */

const BASE_PATH = "/assets/icons";

/**
 * Creates a standard icon object.
 * @param {string} name Display name
 * @param {string} file Filename (without extension)
 * @returns {IconItem}
 */
const fileIcon = (name, file) => ({
  name,
  src: `${BASE_PATH}/${file}.png`,
});

/**
 * Creates a folder icon pair object.
 * @param {string} name Display name
 * @param {string} file Base filename for the folder (e.g., 'asset_folder')
 * @returns {IconItem}
 */
const folderIcon = (name, file) => ({
  name,
  src: [
    `${BASE_PATH}/folders/${file}.png`,
    `${BASE_PATH}/folders/${file}_expanded.png`,
  ],
});

/** @type {Section[]} */
const iconSections = [
  {
    title: "Web Development",
    icons: [
      fileIcon("HTML", "html"),
      fileIcon("CSS", "css"),
      fileIcon("JavaScript", "js"),
      fileIcon("TypeScript", "ts"),
      fileIcon("JS Test", "js_test"),
      fileIcon("TS Test", "ts_test"),
      fileIcon("TS Defs", "ts_d"),
      fileIcon("Svelte", "svelte"),
      fileIcon("Vue", "vue"),
      fileIcon("React", "react"),
      fileIcon("React Test", "react_test"),
      fileIcon("Sass", "sass"),
      fileIcon("Less", "less"),
    ],
  },
  {
    title: "Languages",
    icons: [
      fileIcon("Python", "python"),
      fileIcon("Ruby", "ruby"),
      fileIcon("Rust", "rust"),
      fileIcon("C", "c"),
      fileIcon("C++", "cpp"),
      fileIcon("C#", "csharp"),
      fileIcon("C/C++ Header", "h"),
      fileIcon("Lua", "lua"),
      fileIcon("GDScript", "gdscript"),
      fileIcon("PowerShell", "powershell"),
      fileIcon("Shell", "terminal"),
    ],
  },
  {
    title: "Runtimes & Managers",
    icons: [
      fileIcon("Node.js", "node"),
      fileIcon("Bun", "bun"),
      fileIcon("Deno", "deno"),
      fileIcon("PNPM", "pnpm"),
      fileIcon("Pip", "pip"),
      fileIcon("Cargo", "cargo"),
    ],
  },
  {
    title: "Config & Tools",
    icons: [
      fileIcon("Git", "git"),
      fileIcon("Docker", "docker"),
      fileIcon("Docker Ign", "docker_ignore"),
      fileIcon("ESLint", "eslint"),
      fileIcon("Prettier", "prettier"),
      fileIcon("Prettier Ign", "prettier_ignore"),
      fileIcon("Vercel", "vercel"),
      fileIcon("Vercel Ign", "vercel_ignore"),
      fileIcon("Env", "env"),
      fileIcon("Babel", "babel"),
      fileIcon("Vite", "viteconfig"),
      fileIcon("TS Config", "tsconfig"),
      fileIcon("JS Config", "jsconfig"),
      fileIcon("VS Code", "vscode"),
      fileIcon("VSC Ign", "vscode_ignore"),
      fileIcon("Extension", "vscode_ext"),
      fileIcon("Visual Studio", "vs"),
      fileIcon("Gemini", "gemini"),
      fileIcon("License", "license"),
      fileIcon("Robots", "robots"),
      fileIcon("Toc", "toc"),
      fileIcon("Settings", "config"),
    ],
  },
  {
    title: "Data & Formats",
    icons: [
      fileIcon("JSON", "json"),
      fileIcon("XML", "xml"),
      fileIcon("YAML", "yaml"),
      fileIcon("TOML", "toml"),
      fileIcon("Database", "db"),
      fileIcon("Prisma", "prisma"),
    ],
  },
  {
    title: "Creative & Media",
    icons: [
      fileIcon("Image", "image"),
      fileIcon("SVG", "svg"),
      fileIcon("Font", "font"),
      fileIcon("Video", "video"),
      fileIcon("Audio", "sound"),
      fileIcon("Blender", "blend"),
      fileIcon("3D Model", "model"),
      fileIcon("Aseprite", "ase"),
      fileIcon("Godot Scene", "tscn"),
      fileIcon("Godot Res", "tres"),
    ],
  },
  {
    title: "Generic Files",
    icons: [
      fileIcon("File", "file"),
      fileIcon("Text", "text"),
      fileIcon("Markdown", "markdown"),
      fileIcon("Archive", "zip"),
    ],
  },
  {
    title: "Folders",
    icons: [
      folderIcon("Generic", "folder"),
      folderIcon("Assets", "asset_folder"),
      folderIcon("Data", "data_folder"),
      folderIcon("Dist", "dist_folder"),
      folderIcon("Extension", "extension_folder"),
      folderIcon("Models", "model_folder"),
      folderIcon("Node", "node_folder"),
      folderIcon("Python", "python_folder"),
      folderIcon("Sound", "sound_folder"),
      folderIcon(".vscode", "vscode_folder"),
      folderIcon(".vercel", "vercel_folder"),
    ],
  },
];

document.addEventListener("alpine:init", () => {
  // @ts-ignore
  Alpine.data("iconGallery", () => ({
    sections: iconSections,
  }));
});
