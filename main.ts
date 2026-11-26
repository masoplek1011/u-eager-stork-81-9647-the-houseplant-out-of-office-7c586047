import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Houseplant Out-of-Office — one deterministic line, written by the fern.
const line =
  "Out of office. The fern has filed a formal grievance: 214 days, no water — your email is exhibit #47.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
