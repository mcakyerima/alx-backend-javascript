/**
 * Checks if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array whose elements are to be checked.
 * @returns {boolean} - Returns true if all elements in the array exist within the set, false otherwise.
 * @author Mohammed Kaka
 */
export default function hasValuesFromArray(set, array) {
    // Iterate over each element in the array
    for (const element of array) {
        // Check if the element exists in the set
        if (!set.has(element)) {
            // If any element is not found in the set, return false
            return false;
        }
    }
    // If all elements are found in the set, return true
    return true;
}
