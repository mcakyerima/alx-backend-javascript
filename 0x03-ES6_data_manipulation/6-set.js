/**
 * Creates a Set from an array.
 * @param {Array} array - The array to convert to a Set.
 * @returns {Set} - The Set containing unique elements from the input array.
 * @author Mohammed kaka
 */
export default function setFromArray(array) {
    // Create a new Set object
    const set = new Set();

    // Iterate over the elements of the array and add them to the Set
    array.forEach(element => {
        set.add(element);
    });

    // Return the Set object
    return set;
}
