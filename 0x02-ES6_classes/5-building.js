/**
 * Represents a building.
 * @class Building
 * @throws {Error} Throws an error if a subclass does not override the evacuationWarningMessage method.
 * @param {Number} sqft - The square footage of the building.
 * @author Mohammed Ak
 */
export default class Building {
    /**
     * Creates a new Building instance.
     * @constructor
     * @param {Number} sqft - The square footage of the building.
     */
    constructor(sqft) {
      if (this.constructor !== Building) {
        if (typeof this.evacuationWarningMessage !== 'function') {
          throw new Error(
            'Class extending Building must override evacuationWarningMessage',
          );
        }
      }
      this.sqft = sqft;
    }
  
    /**
     * Sets the square footage of the building.
     * @param {Number} sqft - The square footage to set.
     * @throws {TypeError} Throws a TypeError if sqft is not a number.
     */
    set sqft(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
      this._sqft = sqft;
    }
  
    /**
     * Gets the square footage of the building.
     * @returns {Number} The square footage of the building.
     */
    get sqft() {
      return this._sqft;
    }
  }
  