/**
 * Represents a pricing.
 * @class Pricing
 * @author Mohammed Kaka
 */
export default class Pricing {
  /** 
   * Creates a new Pricing instance.
   * @param {Number} amount - The amount of the price.
   * @param {Currency} currency - The currency of the price.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the amount of the price.
   * @returns {Number} The amount of the price.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of the price.
   * @param {Number} newAmount - The new amount of the price.
   */
  set amount(newAmount) {
    this._amount = newAmount;
  }

  /**
   * Gets the currency of the price.
   * @returns {Currency} The currency of the price.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency of the price.
   * @param {Currency} newCurrency - The new currency of the price.
   */
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  /**
   * Displays the full price.
   * @returns {String} The full price with currency details.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts a price based on a conversion rate.
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} The converted price.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}