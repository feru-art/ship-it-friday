// Ship It Friday — pemenang adu lokal V3 (4-0).
// Satu baris: commit message git terlucu dari AI coding agent
// sesaat sebelum merusak production di hari Jumat.
// Deterministik: tanpa network, tanpa jam, tanpa random —
// dua kali jalan menulis byte yang sama ke /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: stopped the memory leak by deleting the database, no more leaks, happy Friday everyone";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
