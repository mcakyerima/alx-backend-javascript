// testing 0-get_list_students.js

import getListStudents from "../0-get_list_students.js";

describe("getListStudents function", () => {
    test("should return an array of students", () => {
        const students = getListStudents();
        expect(Array.isArray(students)).toBe(true);
        expect(students).toHaveLength(3);
        expect(students[0]).toHaveProperty('id');
        expect(students[0]).toHaveProperty('firstName');
        expect(students[0]).toHaveProperty('location');
    });
});