import Building from './5-building.js';

/**
 * Represents a sky-high building.
 * @class SkyHighBuilding
 * @extends Building
 * @author Mohammed Kaka
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding instance.
   * @constructor
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   * @returns {Number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Overrides the evacuationWarningMessage method from the parent class.
   * @returns {String} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
