/**
 * Converts the first letter of a given string to lowercase while keeping the rest unchanged.
 * @param phrase The input string whose first letter should be converted to lowercase.
 * @returns The modified string with the first letter in lowercase.
 */
export function lowerCaseFirstLetter(phrase: string): string {
  return phrase[0].toLowerCase() + phrase.slice(1);
}
