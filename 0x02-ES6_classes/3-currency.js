/**
 * Represents a currency.
 * @class Currency
 * @author Mohammed Ak
 */
export default class Currency {
    /**
     * Creates a new Currency instance.
     * @constructor
     * @param {String} code - The currency code.
     * @param {String} name - The currency name.
     */
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    /**
     * Gets the currency code.
     * @returns {String} The currency code.
     */
    get code() {
      return this._code;
    }
  
    /**
     * Sets the currency code.
     * @param {String} newCode - The new currency code.
     */
    set code(newCode) {
      this._code = newCode;
    }
  
    /**
     * Gets the currency name.
     * @returns {String} The currency name.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Sets the currency name.
     * @param {String} newName - The new currency name.
     */
    set name(newName) {
      this._name = newName;
    }
  
    /**
     * Displays the full currency details.
     * @returns {String} The currency details in the format: name (code).
     */
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
  