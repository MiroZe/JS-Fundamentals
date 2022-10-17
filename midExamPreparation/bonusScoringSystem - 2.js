function bonusScoringSystem(arr) { //90/100 judge
    
  let newArr = arr.map(Number);

  let students = newArr.shift();
  let lectures = newArr.shift();
  let bonus = newArr.shift();
  let maxAttendance = Math.max(...newArr);
  let maxBonusPoints = (maxAttendance / lectures) * (5 + bonus);

  console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
