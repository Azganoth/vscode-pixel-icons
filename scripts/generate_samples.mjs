// @ts-check
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import theme from "../assets/theme.json" with { type: "json" };

const args = process.argv.slice(2);
const outputDirName = args[0] || "samples";
const sampleDir = resolve(process.cwd(), outputDirName);
const collisionDir = join(sampleDir, "_COLLISIONS_");

console.log(`\n🎨 Generating icon theme samples in: ${outputDirName}...`);

// Cleanup and create the sample directory if it doesn't exist
await rm(sampleDir, { recursive: true, force: true });
await mkdir(sampleDir, { recursive: true });

let folderCount = 0;
let fileCount = 0;

// Create folders with .gitkeep
await Promise.all(
  Object.keys(theme.folderNames).map(async (folderName) => {
    await mkdir(join(sampleDir, folderName), { recursive: true });
    folderCount++;
  }),
);

// Create files with extensions
await Promise.all(
  Object.keys(theme.fileExtensions).map(async (extension) => {
    await writeFile(join(sampleDir, `file.${extension}`), "");
    fileCount++;
  }),
);

// Create files with specific names
await Promise.all(
  Object.keys(theme.fileNames).map(async (fileName) => {
    const filePath = join(sampleDir, fileName);
    try {
      await writeFile(filePath, "", { flag: "wx" });
      fileCount++;
    } catch (err) {
      const e = /** @type {NodeJS.ErrnoException} */ (err);
      if (e && (e.code === "EISDIR" || e.code === "EEXIST")) {
        await mkdir(collisionDir, { recursive: true });
        await writeFile(join(collisionDir, fileName), "");
        console.warn(
          `   ⚠️ Collision: "${fileName}" exists as a folder. Created in _COLLISIONS_ instead.`,
        );
        fileCount++;
      } else {
        throw err;
      }
    }
  }),
);

console.log(`\n✅ Success! Generated:`);
console.log(`   📂 ${folderCount} folders`);
console.log(`   📄 ${fileCount} files`);
console.log(`\nopen "${sampleDir}" to view results.\n`);
