/**
 * Represents an airport.
 * @class Airport
 * @author Mohammed Kaka
 */
export default class Airport {
    /**
     * Creates a new Airport instance.
     * @constructor
     * @param {String} name - The name of the airport.
     * @param {String} code - The code of the airport.
     */
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    /**
     * Gets the name of the airport.
     * @returns {String} The name of the airport.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Gets the code of the airport.
     * @returns {String} The code of the airport.
     */
    get code() {
      return this._code;
    }
  
    /**
     * Overrides the default string representation of the object.
     * @returns {String} The airport code.
     */
    toString() {
      return `[object ${this._code}]`;
    }
  }
  