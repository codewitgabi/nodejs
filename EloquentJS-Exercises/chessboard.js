let row = 0;
const col = 15;

const print_even_row = (col) => {
  /* Prints columns for even rows */
  let box = [];
  for (let i = 0; i < col; i++) {
    if (i % 2 === 0) {
      box.push(" ");
    } else {
      box.push("#");
    }
  }

  console.log(box.join(""));
}

const print_odd_row = () => {
  /* Prints columns for odd rows */
  let box = [];
  for (let i = 0; i < col; i++) {
    if (i % 2 !== 0) {
      box.push(" ");
    } else {
      box.push("#");
    }
  }

  console.log(box.join(""));
}


for (let i = 0; i < col; i++) {
  if (i % 2 === 0) print_even_row(col);
  else print_odd_row(col);

  row++;
}