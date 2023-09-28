const add = (a, b, ...args) => {
  args.unshift(a, b)
  return args.reduce((c, d) => c + d);
}

const sub = (a, b, ...args) => {
  args.unshift(a, b);
  return args.reduce((c, d) => c - d);
}

const div = (a, b, ...args) => {
  args.unshift(a, b);
  return args.reduce((c, d) => c / d)
}

module.exports = {
  add,
  sub, div
};