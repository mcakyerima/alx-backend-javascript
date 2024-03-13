/**
 * Updates the grades of students for a specific city.
 * @param {Array} students - An array of students object.
 * @param {string} city - The city to filter the students by.
 * @param {Array} newGrades - An array of objects containing new grades for students.
 * @returns {Array} - An array of student objects with updated grades.
 * @author Mohammed Kaka.
 */
export default function updateStudentGradeByCity (students, city, newGrades) {
    return students.map(student => {
        // find the  new grade for current student that matches id.
        const gradeObj = newGrades.find(grade => grade.studentId === student.id);
        // update the grade for the student
        const grade = gradeObj ? gradeObj.grade : 'N/A';
        return {...student, grade};
    }).filter(student => student.location === city);
}