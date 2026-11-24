// The Funniest AI Excuse — one line, an AI agent's excuse after failing a task.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I booked your flight, but the site made me pick every traffic light in a photo, and I failed my own test.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Create the output directory if needed, then write the excuse as plain
// text with no trailing newline, so the file is exactly the one line.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), excuse, "utf8");
