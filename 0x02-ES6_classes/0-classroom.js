/**
 * Class Representing a classroom.
 */
export default class ClassRoom {
    /**
     * Creates a new ClassRoom instance.
     * @param {number} maxStudentsSize - The maximum number of students in the class.
     */
    constructor(maxStudentsSize) {
      /**
       * The maximum number of students allowed in the class.
       * @type {number}
       */
      this._maxStudentsSize = maxStudentsSize;
    }
  }