/**
 * Returns an array of student IDs from an array of student objects.
 * @param {Array} students - An array of student objects with 'id' properties.
 * @returns {Array} - An array containing the IDs of the students.
 * @author Mohammed Kaka
 */
export default function getListStudentIds(students) {
    // Check if the input is an array
    if (!Array.isArray(students)) {
        return [];
    }

    // Use the map function to extract IDs
    return students.map(student => student.id);
}
