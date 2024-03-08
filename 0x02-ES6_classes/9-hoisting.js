/**
 * Represents a Holberton class.
 * @class HolbertonClass
 * @author Mohammed Kaka
 */
export class HolbertonClass {
    /**
     * Creates a new HolbertonClass instance.
     * @constructor
     * @param {number} year - The year of the class.
     * @param {string} location - The location of the class.
     */
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    /**
     * Gets the year of the Holberton class.
     * @returns {number} The year of the class.
     */
    get year() {
      return this._year;
    }
  
    /**
     * Gets the location of the Holberton class.
     * @returns {string} The location of the class.
     */
    get location() {
      return this._location;
    }
  }
  
  export class StudentHolberton {
    constructor(firstName, lastName, holbertonClass) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._holbertonClass = holbertonClass;
    }
  
    /**
     * Gets the full name of the student.
     * @returns {string} The full name of the student.
     */
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    /**
     * Gets the Holberton class of the student.
     * @returns {HolbertonClass} The Holberton class of the student.
     */
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    /**
     * Gets the full description of the student.
     * @returns {string} The full description of the student.
     */
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
  }
  
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  /**
 * List of students at Holberton.
 * @const listOfStudents
 * @type {StudentHolberton[]}
 */
  const listOfStudents = [student1, student2, student3, student4, student5];
  
  export default listOfStudents;
  