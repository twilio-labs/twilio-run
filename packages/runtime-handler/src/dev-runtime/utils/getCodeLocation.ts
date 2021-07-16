import os from 'os';
import path from 'path';

export type CodeLocation =
  | {
      line: null;
      filePath: null;
      column: null;
      toString(): 'unknown';
    }
  | {
      line: number;
      column: number;
      filePath: string;
      toString(): string;
    };

export const UNKNOWN_LOCATION = {
  line: null,
  filePath: null,
  column: null,
  toString: (): 'unknown' => {
    return 'unknown';
  },
};

const STACK_TRACE_REGEX = /.*\((?<fullFilePath>.*):(?<line>\d+):(?<column>\d+)\)$/i;

export function getCodeLocation(
  options: { relativeFrom?: string; offset?: number } = {}
): CodeLocation {
  options = { relativeFrom: undefined, offset: 0, ...options };
  const fullStackTrace = new Error().stack;
  if (typeof fullStackTrace !== 'string') {
    return UNKNOWN_LOCATION;
  }

  const stackLines = fullStackTrace.split(os.EOL);
  // add two to the offset because the first line is "Error" and the next is the location of this function.
  const locationLine = stackLines[(options.offset || 0) + 2];

  if (!locationLine) {
    return UNKNOWN_LOCATION;
  }

  const match = STACK_TRACE_REGEX.exec(locationLine);
  if (match === null) {
    return UNKNOWN_LOCATION;
  }

  const line = parseInt(match.groups?.line || '0', 0);
  const column = parseInt(match.groups?.column || '0', 0);
  let filePath = match.groups?.fullFilePath || 'unknown';

  if (options.relativeFrom) {
    filePath = path.relative(options.relativeFrom, filePath);
  }

  const stringVersion = `${filePath}:${line}:${column}`;

  return {
    line,
    column,
    filePath,
    toString: () => stringVersion,
  };
}
