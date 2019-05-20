const randomNumber = require('../src/random-number');

describe('Given a number', () => {

  const testNumber1 = 500;
  describe(`When using randomNumber(${testNumber1})`, () => {
    it(`then new random number must be greater than or equal to 0 and less than ${testNumber1}`, () => {
      const newNumber = randomNumber(testNumber1);
  
      expect(newNumber).toBeGreaterThanOrEqual(0);
      expect(newNumber).toBeLessThan(500);
  
      console.log(`Given ${testNumber1} random number is: ${newNumber}`);
    });
  });

  const testNumber2 = 1;
  describe(`When using randomNumber(${testNumber2})`, () => {
    const expectedNumber = 0;
    it(`then new number must be ${expectedNumber}`, () => {
      const newNumber = randomNumber(testNumber2);

      expect(newNumber).toBe(expectedNumber);

      console.log(`Given ${testNumber2} random number is: ${newNumber}`);
    });
  });

  const testNumber3 = 777;
  describe(`When using randomNumber(${testNumber3})`, () => {
    it('then new random number must be greater than or equal to 0 and less than 777', () => {
      const newNumber = randomNumber(testNumber3);
  
      expect(newNumber).toBeGreaterThanOrEqual(0);
      expect(newNumber).toBeLessThan(777);
  
      console.log(`Given ${testNumber3} random number is: ${newNumber}`);
    });
  });

  const testNumber4 = 1000001;
  describe(`When using randomNumber(${testNumber4})`, () => {
    it('Then there should be an exception', function() {
      expect(() => {
        randomNumber(testNumber4);
      }).toThrowError();

      console.log(`Given ${testNumber4} randomNumber should throw an Error`);
    });
  });

  const testNumber5 = 'I\'m not a number';
  describe(`When using randomNumber(${testNumber5})`, () => {
    it('Then there should be an exception', function() {
      expect(() => {
        randomNumber(testNumber5);
      }).toThrowError();

      console.log(`Given "${testNumber5}" randomNumber should throw an Error`);
    });
  });
});