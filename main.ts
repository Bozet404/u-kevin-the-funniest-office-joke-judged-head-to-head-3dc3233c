// The Funniest Office Joke, Judged Head to Head
// Entry: a single one-line joke about office life.
// The program writes that one line to /output/entry.txt, nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my boss for a raise, so he gave me more work — apparently that's the office version of a refund.";

// The gate only accepts 1 to 200 characters of UTF-8 text: refuse to write
// an entry that could never pass instead of failing silently in grading.
if ([...JOKE].length < 1 || [...JOKE].length > 200) {
  throw new Error(`Joke is ${[...JOKE].length} characters, outside the 1-200 gate`);
}
if (/^\s*$/.test(JOKE) || JOKE.includes("\n")) {
  throw new Error("Joke must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
