/**
 * Module for testing calculateNumber function using Chai assertion library.
 * @module calculateNumberTestsChai
 */

const { expect } = require('chai');
const { it, describe } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  /**
   * Tests for SUM operation.
   */
  describe('SUM', () => {
    /**
     * Test if two numbers are correctly rounded and added.
     */
    it('should correctly round and add two numbers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    /**
     * Test if two numbers are correctly rounded and added (2nd round).
     */
    it('should correctly round and add two numbers (2nd round)', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    /**
     * Test if two numbers are correctly rounded and added (3rd round).
     */
    it('should correctly round and add two numbers (3rd round)', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    /**
     * Test if two numbers are correctly rounded and added (4th round).
     */
    it('should correctly round and add two numbers (4th round)', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    /**
     * Test if two numbers are correctly rounded and added (5th round).
     */
    it('should correctly round and add two numbers (5th round)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    /**
     * Test if negative numbers are correctly rounded and added.
     */
    it('should correctly round and add negative numbers', () => {
      expect(calculateNumber('SUM', -1.3, -3.7)).to.equal(-5);
    });
  });

  /**
   * Tests for SUBTRACT operation.
   */
  describe('SUBTRACT', () => {
    /**
     * Test if one number is subtracted from another correctly.
     */
    it('should correctly subtract one number from another', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    /**
     * Test if one number is subtracted from another correctly (2nd round).
     */
    it('should correctly subtract one number from another (2nd round)', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    /**
     * Test if one number is subtracted from another correctly (3rd round).
     */
    it('should correctly subtract one number from another (3rd round)', () => {
      expect(calculateNumber('SUBTRACT', 6.2, 3.7)).to.equal(2);
    });

    /**
     * Test if one number is subtracted from another correctly (4th round).
     */
    it('should correctly subtract one number from another (4th round)', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 3.7)).to.equal(2);
    });

    /**
     * Test if one number is subtracted from another correctly (5th round).
     */
    it('should correctly subtract one number from another (5th round)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    /**
     * Test if negative numbers are correctly subtracted.
     */
    it('should correctly subtract negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -3.7)).to.equal(3);
    });
  });

  /**
   * Tests for DIVIDE operation.
   */
  describe('DIVIDE', () => {
    /**
     * Test if one number is correctly divided by another.
     */
    it('should correctly divide one number by another', () => {
      expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
    });

    /**
     * Test if one number is correctly divided by another (2nd round).
     */
    it('should correctly divide one number by another (2nd round)', () => {
      expect(calculateNumber('DIVIDE', 4, 3.7)).to.equal(1);
    });

    /**
     * Test if one number is correctly divided by another (3rd round).
     */
    it('should correctly divide one number by another (3rd round)', () => {
      expect(calculateNumber('DIVIDE', 2.2, 0.7)).to.equal(2);
    });

    /**
     * Test if one number is correctly divided by another (4th round).
     */
    it('should correctly divide one number by another (4th round)', () => {
      expect(calculateNumber('DIVIDE', 15, 2.7)).to.equal(5);
    });

    /**
     * Test if one number is correctly divided by another (5th round).
     */
    it('should correctly divide one number by another (5th round)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    /**
     * Test if division by zero returns 'Error'.
     */
    it('should return "Error" for division by zero', () => {
      expect(calculateNumber('DIVIDE', -1.3, 0)).to.equal('Error');
    });
  });
});
