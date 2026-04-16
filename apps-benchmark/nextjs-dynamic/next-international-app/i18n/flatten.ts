type FlatMessages = Record<string, string>;

export function flattenMessages(
  obj: Record<string, any>,
  prefix = ""
): FlatMessages {
  const result: FlatMessages = {};
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(result, flattenMessages(obj[key], fullKey));
    } else {
      result[fullKey] = String(obj[key]);
    }
  }
  return result;
}
