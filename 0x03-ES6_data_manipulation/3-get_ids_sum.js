/**
 * Sums all the id's in a students
 * @param {Array} students - An array of objects containing students
 * @return {number} - sum of the id's of the students
 * @author Mohammed Kaka
 */

export default function getStudentIdsSum(students){
    return students.reduce((sum, student) => sum + student.id, 0);
}