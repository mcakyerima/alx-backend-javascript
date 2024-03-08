/**
 * Represents a Holberton course.
 * @class HolbertonCourse
 * @author Mohammed Kaka
 */
export default class HolbertonCourse {
    /**
     * Creates a new HolbertonCourse instance.
     * @constructor
     * @param {string} name - The name of the course.
     * @param {number} length - The length of the course in weeks
     * @param {string[]} students - An array of students enrolled in the course.
     */
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    /**
     * Gets the name of the course.
     * @returns {string} The name of the course
     */
    get name() {
        return this._name;
    }

    /**
     * Sets the name of the course.
     * @param {string} newName - The new name of the course.
     */
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            throw new TypeError('Name must be a string');
        }
    }

    /**
     * Gets the lengh of the course.
     * @return {number} The lengh of the course in weeks.
     */
    get length() {
        return this._length;
    }

    /**
     * Sets the length of the course.
     * @param {number} newLength - The new length of the course
     */
    set length(newLength) {
        if (typeof newLength === 'number') {
            this._length = newLength;
        } else {
            throw new TypeError('Length must be a number');
        }
    }

    /**
     * Gets the array of students enrolled in the course.
     * @returns {string[]} An array of students enrolled in the course.
     */
    get students() {
        return this._students;
    }

    /**
     * Sets the array of students enrolled in the course
     * @param {string[]} newStudents - An array of students enrolled in the course.
     */
    set students(newStudents) {
        if (Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')) {
            this._students = newStudents;
        } else {
            throw new TypeError('Students must be an Array');
        }
    }
}