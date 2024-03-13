/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position to set the Int8 value.
 * @param {number} value - The Int8 value to set.
 * @returns {DataView} - The DataView representing the modified ArrayBuffer.
 */
export default function createInt8TypedArray(length, position, value) {
    // Create a new ArrayBuffer with the specified length
    const buffer = new ArrayBuffer(length);

    // Check if the position is within range
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }

    // Create a DataView from the ArrayBuffer
    const dataView = new DataView(buffer);

    // Set the Int8 value at the specified position
    dataView.setInt8(position, value);

    // Return the DataView representing the modified ArrayBuffer
    return dataView;
}
