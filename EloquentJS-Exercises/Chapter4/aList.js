function arrayToList(arr) {
  // [1, 2, 3]

  let list = {};

  for (let item of arr) {
    let list_values = Object.values(list);
    let list_last_value = Object.values(list)[list_values.length];
    Object.assign(list, { value: item, rest: null });
  }
}


console.log(arrayToList([1, 2, 3]))