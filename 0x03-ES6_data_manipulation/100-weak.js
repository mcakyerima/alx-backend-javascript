/**
 * Query the API and track the number of times it's called for each endpoint.
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @throws {Error} - Throws an error if the number of queries for an endpoint is >= 5.
 * @author Mohammed kaka.
 */
/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}