// 0-get_list_students.js
/**
 * Returns a list of students.
 * @returns {{id: Number, firstName: String, location: String}[]}
 * @author Mohammed Kaka
 */

export default function getListStudents() {
    const studentsList = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]

    return studentsList;
}