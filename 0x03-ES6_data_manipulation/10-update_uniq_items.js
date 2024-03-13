/**
 * Updates the quantity of items with initial quantity 1 to 100 in a map.
 * @param {Map} map - The map containing items and their quantities.
 * @throws {Error} - Throws an error if the argument is not a Map.
 * @author Mohammed Kaka.
 */
export default function updateUniqueItems(map) {
    // Check if the argument is a Map
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    // Iterate over each entry in the map
    map.forEach((quantity, item) => {
        // Check if the quantity is 1
        if (quantity === 1) {
            // Update the quantity to 100
            map.set(item, 100);
        }
    });
}
