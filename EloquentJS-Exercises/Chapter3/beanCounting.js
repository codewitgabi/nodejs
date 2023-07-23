const countBs = (str) => {
  /**
   * Count the number of uppercase 'B' in the given string
   */
  count = 0;
  for (let char of str) {
    if (char === "B") {
      count++;
    }
  }

  return count;
};

const countChar = (str, chr) => {
  /**
   * Count the number of chr in the given str
   */
  count = 0;
  for (let char of str) {
    if (char === chr) {
      count++;
    }
  }

  return count;
};

module.exports = { countBs, countChar };
