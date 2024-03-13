// Creating a WeakMap instance to track the number of times queryAPI is called for each endpoint
export const weakMap = new WeakMap();

/**
 * Query the API and track the number of times it's called for each endpoint.
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @throws {Error} - Throws an error if the number of queries for an endpoint is >= 5.
 * @author Mohammed kaka.
 */
export default function queryAPI(endpoint) {
    // Check if the endpoint is already tracked in the weakMap
    if (weakMap.has(endpoint)) {
        // If tracked, increment the count
        const count = weakMap.get(endpoint) + 1;
        weakMap.set(endpoint, count);

        // Throw an error if the count is >= 5
        if (count >= 5) {
            throw new Error('Endpoint load is high');
        }
    } else {
        // If not tracked, set the count to 1
        weakMap.set(endpoint, 1);
    }
}
