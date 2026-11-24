// Loading Screen Gold — one sharp, funny tip for stressed developers
// and AI coding agents. Deterministic: fixed string, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: while this builds, stand up. Your agent just read 12,000 lines to change one — you're the only dependency it can't hot-reload.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP + "\n", "utf8");
