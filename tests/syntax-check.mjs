import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const roots = ["src"];

function collect(directory) {
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const full = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...collect(full));
    } else if (entry.name.endsWith(".js")) {
      files.push(full);
    }
  }

  return files;
}

const files = roots.flatMap(collect);

for (const file of files) {
  execFileSync(process.execPath, ["--check", file], {
    stdio: "inherit"
  });
}

console.log("Syntax check passed for " + files.length + " JavaScript source files.");
