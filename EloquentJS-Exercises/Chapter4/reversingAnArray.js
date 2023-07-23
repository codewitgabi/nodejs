function reverseArray(arr) {
  /**
   * Returns a new array that has the same elements in the inverse order
   *
   * Returns a copy of the the given array.
   */
  const newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
  /**
   * Modifies the given array by reversing its elements.
   *
   * Returns the modified original array.
   */
  let j = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    j--;
  }

  return arr;
}

module.exports = { reverseArray, reverseArrayInPlace };
