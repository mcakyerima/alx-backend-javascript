/**
 * Filter an array of students on specified location
 * @param { Array } students - An array of students
 * @param { string } location - The location to filter the students by
 * @returns {Array} - An array of students object that belong to the specific location.
 * @authur Mohammed Kaka 
 */

export default function getStudentsByLocation(students, location) {
    //fileter and return new array of object
    return students.filter(student => student.location === location)
}