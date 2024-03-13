/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author Mohammed Kaka
 * @returns {String}
 */
export default function cleanSet(set, startString) {
    const parts = [];
    
    // Check if inputs are valid
    if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
      return '';
    }
  
    // Iterate over set values and process them
    for (const value of set.values()) {
      if (typeof value === 'string' && value.startsWith(startString)) {
        const valueSubStr = value.substring(startString.length);
  
        if (valueSubStr && valueSubStr !== value) {
          parts.push(valueSubStr);
        }
      }
    }
  
    // Join processed values with dash
    return parts.join('-');
  }
  