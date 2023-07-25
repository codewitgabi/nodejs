// Prints to standard output

console.log("Hello world"); // also console.info();

// Prints to standard error

console.error("An error occurred"); // also console.warn();

// Calculate program execution;

console.time("loop");

for (let i = 0; i < 2000; i++) {
  console.log(i)
}

console.timeEnd("loop");

// Mark an error trace
let data;

if (!data) {
  console.trace("throw error");
}