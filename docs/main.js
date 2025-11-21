// @ts-check

/**
 * @typedef {Object} IconItem
 * @property {string} name
 * @property {string|string[]} src
 * @property {string|null} tooltip
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
 * @param {string|null} [tooltip] Optional tooltip text
 * @returns {IconItem}
 */
const fileIcon = (name, file, tooltip = null) => ({
  name,
  src: `${BASE_PATH}/${file}.png`,
  tooltip,
});

/**
 * Creates a folder icon pair object.
 * @param {string} name Display name
 * @param {string} file Base filename for the folder (e.g., 'asset_folder')
 * @param {string|null} [tooltip] Optional tooltip text
 * @returns {IconItem}
 */
const folderIcon = (name, file, tooltip = null) => ({
  name,
  src: [
    `${BASE_PATH}/folders/${file}.png`,
    `${BASE_PATH}/folders/${file}_expanded.png`,
  ],
  tooltip,
});

/** @type {Section[]} */
const iconSections = [
  {
    title: "Web Development",
    icons: [
      fileIcon("HTML", "html", ".htm, .html"),
      fileIcon("CSS", "css", ".css"),
      fileIcon("JavaScript", "js", ".cjs, .js, .mjs"),
      fileIcon("TypeScript", "ts", ".ts"),
      fileIcon("JS Test", "js_test", ".e2e.js, .spec.js, .test.js"),
      fileIcon("TS Test", "ts_test", ".e2e.ts, .spec.ts, .test.ts"),
      fileIcon("TS Defs", "ts_d", ".d.ts"),
      fileIcon("Svelte", "svelte", ".svelte"),
      fileIcon("Vue", "vue", ".vue"),
      fileIcon("React", "react", ".jsx, .tsx"),
      fileIcon(
        "React Test",
        "react_test",
        ".e2e.jsx, .spec.jsx, .test.jsx, .e2e.tsx, .spec.tsx, .test.tsx",
      ),
      fileIcon("Sass", "sass", ".sass, .scss"),
      fileIcon("Less", "less", ".less"),
    ],
  },
  {
    title: "Languages",
    icons: [
      fileIcon("Python", "python", ".py, .pyi, .pyw"),
      fileIcon("Ruby", "ruby", ".erb, .rake, .rb"),
      fileIcon("Rust", "rust", ".rs"),
      fileIcon("C", "c", ".c"),
      fileIcon("C++", "cpp", ".c++, .cc, .cp, .cpp, .cxx"),
      fileIcon("C#", "csharp", ".cs, .csx"),
      fileIcon("C/C++ Header", "h", ".h, .hh, .hpp, .hxx"),
      fileIcon("Lua", "lua", ".lua"),
      fileIcon("GDScript", "gdscript", ".gd"),
      fileIcon(
        "Shell",
        "terminal",
        ".bat, .cmd, .fish, .sh, .zsh; .bash_history, .bash_profile, .bashrc, .profile, .zprofile, .zshrc",
      ),
      fileIcon("PowerShell", "powershell", ".ps1"),
    ],
  },
  {
    title: "Runtimes & Managers",
    icons: [
      fileIcon(
        "Node.js",
        "node",
        ".node-version, .npmrc, .nvmrc, nodemon.json, package.json",
      ),
      fileIcon("Bun", "bun", "bunfig.toml"),
      fileIcon("Deno", "deno", "deno.json, deno.jsonc"),
      fileIcon("PNPM", "pnpm", ".pnpmfile.cjs, pnpm-workspace.yaml"),
      fileIcon("Pip", "pip", "requirements.txt"),
      fileIcon("Cargo", "cargo", "Cargo.toml"),
    ],
  },
  {
    title: "Config & Tools",
    icons: [
      fileIcon(
        "Git",
        "git",
        ".gitattributes, .gitconfig, .gitignore, .gitkeep, .gitmessage, .gitmodules, .gitreview",
      ),
      fileIcon(
        "Docker",
        "docker",
        "Dockerfile, docker-compose.yml (and variants)",
      ),
      fileIcon("Docker Ign", "docker_ignore", ".dockerignore"),
      fileIcon(
        "ESLint",
        "eslint",
        ".eslintrc, eslint.config.js (and variants)",
      ),
      fileIcon(
        "Prettier",
        "prettier",
        ".prettierrc, prettier.config.js (and variants)",
      ),
      fileIcon("Prettier Ign", "prettier_ignore", ".prettierignore"),
      fileIcon("Vercel", "vercel", "vercel.json"),
      fileIcon("Vercel Ign", "vercel_ignore", ".vercelignore"),
      fileIcon("Env", "env", ".env (and variants)"),
      fileIcon("Babel", "babel", ".babelrc, babel.config.js (and variants)"),
      fileIcon("Vite", "viteconfig", "vite.config.js (and variants)"),
      fileIcon("TS Config", "tsconfig", "tsconfig.json (and variants)"),
      fileIcon("JS Config", "jsconfig", "jsconfig.json (and variants)"),
      fileIcon("VS Code", "vscode", ".vscode"),
      fileIcon("VSC Ign", "vscode_ignore", ".vscodeignore"),
      fileIcon("Extension", "vscode_ext", ".vsix"),
      fileIcon("Visual Studio", "vs", ".csproj, .sln"),
      fileIcon("Gemini", "gemini", "GEMINI.md"),
      fileIcon("License", "license", "LICENSE, COPYING (and variants)"),
      fileIcon("Robots", "robots", "robots.txt"),
      fileIcon("Toc", "toc", ".toc"),
      fileIcon(
        "Settings",
        "config",
        ".cfg, .conf, .config, .ini, .properties; .editorconfig",
      ),
    ],
  },
  {
    title: "Data & Formats",
    icons: [
      fileIcon("JSON", "json", ".json, .json5, .jsonc"),
      fileIcon("XML", "xml", ".xml"),
      fileIcon("YAML", "yaml", ".yaml, .yml"),
      fileIcon("TOML", "toml", ".toml"),
      fileIcon("Database", "db", ".csv, .db, .sql, .sqlite, .sqlite3"),
      fileIcon("Prisma", "prisma", "prisma"),
    ],
  },
  {
    title: "Creative & Media",
    icons: [
      fileIcon(
        "Image",
        "image",
        ".bmp, .dds, .gif, .heic, .icns, .ico, .jpeg, .jpg, .png, ...",
      ),
      fileIcon("SVG", "svg", ".svg"),
      fileIcon("Font", "font", ".otf, .ttf, .woff, .woff2"),
      fileIcon(
        "Video",
        "video",
        ".avi, .flv, .m4v, .mkv, .mov, .mp4, .mts, .vob, ...",
      ),
      fileIcon(
        "Audio",
        "sound",
        ".aac, .aif, .aiff, .au, .flac, .m4a, .mid, .mp3, ...",
      ),
      fileIcon("Blender", "blend", ".blend"),
      fileIcon(
        "3D Model",
        "model",
        ".dae, .fbx, .glb, .gltf, .obj, .ply, .stl",
      ),
      fileIcon("Aseprite", "ase", ".ase, .aseprite"),
      fileIcon("Godot Scene", "tscn", ".tscn"),
      fileIcon("Godot Res", "tres", ".tres"),
    ],
  },
  {
    title: "Generic Files",
    icons: [
      fileIcon("File", "file"),
      fileIcon("Text", "text", ".log, .txt"),
      fileIcon("Markdown", "markdown", ".markdown, .md"),
      fileIcon("Archive", "zip", ".7z, .7zip, .gz, .rar, .tar, .tgz, .zip"),
    ],
  },
  {
    title: "Folders",
    icons: [
      folderIcon("Generic", "folder"),
      folderIcon(
        "Assets",
        "asset_folder",
        "assets, icons, images, public, static",
      ),
      folderIcon("Dist", "dist_folder", "bin, build, dist, out, target"),
      folderIcon("Node", "node_folder", "node_modules"),
      folderIcon("VS Code", "vscode_folder", ".vscode"),
      folderIcon("Vercel", "vercel_folder", ".vercel"),
      folderIcon("Data", "data_folder", "data, docs"),
      folderIcon(
        "Extension",
        "extension_folder",
        "addons, extensions, plugins, vendor",
      ),
      folderIcon("Models", "model_folder", "3D, models"),
      folderIcon("Sound", "sound_folder", "music, sound"),
      folderIcon("Python", "python_folder", "python"),
    ],
  },
];

const DEFAULT_STATUS_TEXT = "Hover or tap over an icon to see details";

document.addEventListener("alpine:init", () => {
  // @ts-ignore
  Alpine.data("gallery", () => ({
    sections: iconSections,
  }));

  // @ts-ignore
  Alpine.store("ui", {
    defaultText: DEFAULT_STATUS_TEXT,
    statusText: DEFAULT_STATUS_TEXT,
    /** @type {string|null} */
    statusIcon: null,
    /** @type {IconItem|null} */
    focusedIcon: null,

    /**
     * @param {IconItem} icon
     */
    handleMouseEnter(icon) {
      this.updateStatus(icon);
    },

    handleMouseLeave() {
      if (this.focusedIcon) {
        this.updateStatus(this.focusedIcon);
      } else {
        this.resetStatus();
      }
    },

    /**
     * @param {IconItem} icon
     */
    handleFocus(icon) {
      this.focusedIcon = icon;
      this.updateStatus(icon);
    },

    handleBlur() {
      this.focusedIcon = null;
      this.resetStatus();
    },

    /**
     * @param {IconItem} icon
     */
    updateStatus(icon) {
      this.statusIcon = Array.isArray(icon.src) ? icon.src[0] : icon.src;
      this.statusText = icon.tooltip || icon.name;
    },

    resetStatus() {
      this.statusIcon = null;
      this.statusText = this.defaultText;
    },
  });
});
