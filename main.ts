import fs from "node:fs";

const LINE = "Dear Director, I'm resigning. The gorilla has been holding staff meetings, and the rest of the animals are taking the minutes.";

function fail(message) {
  console.error("invalid entry: " + message);
  process.exit(1);
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help") || args.includes("-h")) {
    console.log("usage: node main.ts [--help]");
    console.log("");
    console.log("Writes the one-line resignation letter to $MAKEFUN_OUTPUT_DIR/entry.txt");
    console.log("(defaults to /output/entry.txt when MAKEFUN_OUTPUT_DIR is unset).");
    process.exit(0);
  }

  const line = LINE;
  const chars = [...line].length;

  if (chars < 1 || chars > 140) {
    fail("line must be 1..140 characters long, got " + chars);
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("line must be exactly one line");
  }
  if (line.trim().length === 0) {
    fail("line must not be only white space");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const outFile = outDir + "/entry.txt";

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, line + "\n", "utf8");
  console.log("wrote " + outFile + " (" + chars + " characters)");
}

main();
