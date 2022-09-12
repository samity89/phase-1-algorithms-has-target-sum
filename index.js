function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
iterate through array 
iterate through array adding each value to target
return sums of each value
*/

/*
Takes an interger (target) from the number array
Functions iterates through the array individually checking the sum of the interger (target) plus each of the remaining values of array
Function returns the sum of each iteration (.map for implicit return?)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
