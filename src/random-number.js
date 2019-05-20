const flip = require('./flip');

/**
 * @description Creates a random binary number
 * @param {number} m Represents the maximum length of a binary number
 * @return {string} Returns a random binary number
 */
const randomBinary = (m) => {
  let binary = '';

  for (var i = 0; i < m; i += 1) {
    binary += flip() ? '1' : '0';
  }

  return binary;
};

/**
 * @description Generates a random number greater than or equal to 0, and less than input n
 * @param {number} n Represents a number that must be greater than 0 and less than 1,000,000
 */
function randomNumber(n) {
  const minAllowedInputNumber = 1;
  const maxAllowedInputNumber = 999999;

  if (!n || typeof n !== 'number' || n < minAllowedInputNumber || n > maxAllowedInputNumber) {
    throw new Error(`Error:
    "n" must be a *number* greater than 0 and less than 1,000,000
     Your input: n = ${n}
  `);
  }
    
  if (n === minAllowedInputNumber) return 0;

  const maxPossibleNumber = n - 1;
  const minimalLengthOfMaxNumberInBinary = maxPossibleNumber.toString(2).length;

  let result;

  do {
    result = parseInt(randomBinary(minimalLengthOfMaxNumberInBinary), 2);
  } while (result > maxPossibleNumber);

  return result;
}

module.exports = randomNumber;
