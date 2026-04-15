// Grab the new 'print' function and export it under the old 'printAST' name
export { print as printAST } from "@formatjs/icu-messageformat-parser/printer";

// Re-export everything else so nothing else breaks
export * from "@formatjs/icu-messageformat-parser/printer";
