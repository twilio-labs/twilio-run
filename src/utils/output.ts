export function writeOutput(...args: any[]) {
  console.log(...args);
}

export function writeJSONOutput(...args: any[]) {
  writeOutput(JSON.stringify(args, null, '\t'));
}
