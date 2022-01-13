/**
 *
 * @param input Requires an object
 * @returns An array of objects: { key, value }
 */
export const objectEntries = (input: Record<string, any>) => {
  return Object.entries(input).map(([key, value]) => ({ key, value }));
};
