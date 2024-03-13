/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The set to filter values from.
 * @param {string} startString - The string that set values should start with.
 * @returns {string} - A string containing filtered set values separated by -.
 * @author Mohammed Kaka.
 */
export default function cleanSet(set, startString) {
    // Convert the Set to an array and filter values starting with startString
    const filteredValues = [...set].filter(value => value.startsWith(startString));
    
    // Clean values by removing startString from the beginning
    const cleanedValues = filteredValues.map(value => value.substring(startString.length));
    
    // Join cleaned values into a single string separated by -
    return cleanedValues.join('-');
}
