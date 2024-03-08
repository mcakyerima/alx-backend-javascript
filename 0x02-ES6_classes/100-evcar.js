import Car from './10-car.js';

/**
 * Represents an electric vehicle.
 * @class
 * @extends Car
 * @author Mohammed Ak
 */
export default class EVCar extends Car {
  /**
   * Creates a new EVCar instance.
   * @constructor
   * @param {string} brand - The brand of the EV car.
   * @param {string} motor - The motor type of the EV car.
   * @param {string} color - The color of the EV car.
   * @param {string} range - The range of the EV car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Gets the range of the EV car.
   * @returns {string} The range of the EV car.
   */
  get range() {
    return this._range;
  }

  /**
   * Sets the range of the EV car.
   * @param {string} value - The new range of the EV car.
   */
  set range(value) {
    this._range = value;
  }

  /**
   * Clones the current EV car.
   * @returns {Car} A new Car object with the same attributes as the original EV car.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Car();
  }

  /**
   * Returns the constructor of the Car class.
   * @static
   * @returns {Function} The constructor of the Car class.
   */
  static get [Symbol.species]() {
    return Car;
  }
}
