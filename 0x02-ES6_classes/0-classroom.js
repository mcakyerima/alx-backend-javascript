/**
 * Class Representing a classroom.
 * @class
 */
export default class ClassRoom {
    /**
     * Creates a new ClassRoom instance.
     * @constructor
     * @param {number} maxStudentsSize - The maximum number of students in the class.
     */
    constructor(maxStudentsSize) {
      /**
       * The maximum number of students allowed in the class.
       * @type {number}
       * @private
       */
      this._maxStudentsSize = maxStudentsSize;
    }
  }