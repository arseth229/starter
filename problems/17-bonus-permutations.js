/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations (array) {
  let result = [];
  let factorial = () => {
    let fact = array.length;
    for (let i = array.length - 1; i > 0; i--) {
      fact = fact * i;
    }
    return fact;
  }

  if (result.length >= factorial(array)) {
    return result;
  }

  if (result.length < factorial(array)) {
    result.push(array);
    for (let n = 0; n < array.length; n++) {
      let termOut = array[n]
      let indexOfTerm = array.indexOf(termOut)
      array.uppend(termOut).splice(indexOfTerm, 1);
    }

  }
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
