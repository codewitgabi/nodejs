function range(start, end, step = 1) {
  const arr = [];

  for (let i = start; end > start ? i <= end : i >= end; i += step) {
    arr.push(i);
  }

  return arr;
}

function sum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

module.exports = { range, sum };
