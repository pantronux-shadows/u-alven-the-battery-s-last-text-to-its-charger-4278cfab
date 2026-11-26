import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The battery's last text to the charger it waited for all day.
const MESSAGE =
  "You watched me die all day from two feet away. I saved my last 1% for this: you had one job, and a job is literally all you are. The power bank sends its regards.";

// The gate: UTF-8 text of 1 to 200 characters, not only white space.
if (MESSAGE.length < 1 || MESSAGE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${MESSAGE.length}`);
}
if (MESSAGE.trim().length < 1 || MESSAGE.includes("\n") || MESSAGE.includes("\r")) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE, { encoding: "utf-8" });
