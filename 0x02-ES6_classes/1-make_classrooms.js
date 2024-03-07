// import the classRoom class from 0-classroom.js
import ClassRoom from "./0-classroom";

/**
 * Intializes an arrray of ClassRoom objects with predefined sizes.
 * @returns {ClassRoom[]} An array of ClassRoom objects.
 */

function initializeRooms() {
    // Create ClassRoom objects with sizes 19, 20, 34.
    const rooms = [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34),
    ];

    return rooms;
}

// Export the initializeRooms method
export default initializeRooms;