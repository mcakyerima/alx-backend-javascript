/**
 * Represents a Holberton Course.
 * @class
 * @author Mohammed Ak
 */
export default class HolbertonCourse {
    /**
     * Creates a new instance of the Holberton Course.
     * @constructor
     * @param {string} name - The name of the course.
     * @param {number} length - The duration of the course in months.
     * @param {string[]} students - The list of students enrolled in the course.
     */
    constructor(name, length, students) {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  
    /**
     * Get the name of the course.
     * @returns {string} The name of the course.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Set the name of the course.
     * @param {string} value - The new name for the course.
     * @throws {TypeError} Throws an error if the name is not a string.
     */
    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = value;
    }
  
    /**
     * Get the duration of the course.
     * @returns {number} The duration of the course in months.
     */
    get length() {
      return this._length;
    }
  
    /**
     * Set the duration of the course.
     * @param {number} value - The new duration for the course in months.
     * @throws {TypeError} Throws an error if the length is not a number.
     */
    set length(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = value;
    }
  
    /**
     * Get the list of students enrolled in the course.
     * @returns {string[]} The list of students enrolled in the course.
     */
    get students() {
      return this._students;
    }
  
    /**
     * Set the list of students enrolled in the course.
     * @param {string[]} value - The new list of students for the course.
     * @throws {TypeError} Throws an error if the students are not provided as an array of strings.
     */
    set students(value) {
      if (!(value instanceof Array)) {
        throw new TypeError('Students must be an array of strings');
      }
      if (!value.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = value;
    }
  }