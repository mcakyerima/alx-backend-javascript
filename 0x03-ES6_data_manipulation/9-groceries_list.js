/**
 * Returns a Map of groceries with their quantities.
 * @returns {Map} - A Map containing groceries and their quantities.
 * @author Mohammed kaka
 */
export default function groceriesList() {
    // Create a new Map object
    const groceryMap = new Map();

    // Add groceries and their quantities to the map
    groceryMap.set('Apples', 10);
    groceryMap.set('Tomatoes', 10);
    groceryMap.set('Pasta', 1);
    groceryMap.set('Rice', 1);
    groceryMap.set('Banana', 5);

    // Return the Map object
    return groceryMap;
}
