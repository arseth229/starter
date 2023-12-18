/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
// 11-flatten.js
[1, [2, [3]]]

result.
***********************************************************************/

function flatten(arr) {
  if (arr.length === 0) {
    return arr;
  }

  if (!Array.isArray(arr)) {
    return [arr];
  }

  return arr.reduce((result, element) => {
    return result.concat(flatten(element));
  }, []);
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
