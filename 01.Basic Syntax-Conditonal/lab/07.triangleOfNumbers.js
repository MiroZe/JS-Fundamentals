function triangle(number) {
  for (let i = 1; i <= number; i++) {
    let output = "";

    for (let m = 1; m <= i; m++) {
      output += `${i} `;
    }
    console.log(output);
  }
}
triangle(6);
