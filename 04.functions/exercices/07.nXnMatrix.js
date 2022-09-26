function nXnMatric(number) {
  for (let i = 0; i < number; i++) {
    let row = [];

    for (let m = 0; m < number; m++) {
      row.push(number);
    }
    console.log(row.join(" "));
  }
}
nXnMatric(7);
