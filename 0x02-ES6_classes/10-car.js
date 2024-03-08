/**
 * Represents a car.
 * @class
 * @author Mohammed Kaka
 */
export default class Car {
    /**
     * Creates a new Car instance.
     * @constructor
     * @param {string} brand - The brand of the car.
     * @param {string} motor - The motor type of the car.
     * @param {string} color - The color of the car.
     */
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    /**
     * Gets the brand of the car.
     * @returns {string} The brand of the car.
     */
    get brand() {
      return this._brand;
    }
  
    /**
     * Sets the brand of the car.
     * @param {string} value - The new brand of the car.
     */
    set brand(value) {
      this._brand = value;
    }
  
    /**
     * Gets the motor type of the car.
     * @returns {string} The motor type of the car.
     */
    get motor() {
      return this._motor;
    }
  
    /**
     * Sets the motor type of the car.
     * @param {string} value - The new motor type of the car.
     */
    set motor(value) {
      this._motor = value;
    }
  
    /**
     * Gets the color of the car.
     * @returns {string} The color of the car.
     */
    get color() {
      return this._color;
    }
  
    /**
     * Sets the color of the car.
     * @param {string} value - The new color of the car.
     */
    set color(value) {
      this._color = value;
    }
  
    /**
     * Returns the constructor of the Car class.
     * @static
     * @returns {Function} The constructor of the Car class.
     */
    static get [Symbol.species]() {
      return this;
    }
  
    /**
     * Clones the current car.
     * @returns {Car} A new Car object with the same attributes as the original.
     */
    cloneCar() {
      const Species = this.constructor[Symbol.species];
      return new Species();
    }
  }
  