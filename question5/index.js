function printPattern(rows) {
  let patt = "";
  for (let i = rows; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      if (i === rows || j === 1 || j === i) {
        patt += "*";
      } else {
        patt += " ";
      }
    }
    patt += "\n";
  }
  console.log(patt);
}

printPattern(10);
