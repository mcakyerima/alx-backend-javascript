/**
 * Represents a Holberton class.
 * @class HolbertonClass
 * @author Mohammed Kaka
 */
export default class HolbertonClass {
    /**
     * Creates a new HolbertonClass instance.
     * @constructor
     * @param {Number} size - The size of the class.
     * @param {String} location - The location of the class.
     */
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    /**
     * Gets the size of the class.
     * @returns {Number} The size of the class.
     */
    get size() {
      return this._size;
    }
  
    /**
     * Gets the location of the class.
     * @returns {String} The location of the class.
     */
    get location() {
      return this._location;
    }
  
    /**
     * Converts the class to a Number.
     * @returns {Number} The size of the class.
     */
    valueOf() {
      return this._size;
    }
  
    /**
     * Converts the class to a String.
     * @returns {String} The location of the class.
     */
    toString() {
      return this._location;
    }
  }
  