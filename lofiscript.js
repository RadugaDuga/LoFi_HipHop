
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {

  for (let x = 0; x < size *2 ; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  
  board += "\n";
}

console.log(board);