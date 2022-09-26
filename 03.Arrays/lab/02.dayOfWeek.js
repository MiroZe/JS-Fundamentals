function dayOfWeek(dayNumber) {
  let dayArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (dayNumber > 0 && dayNumber < 8) {
    console.log(dayArr[dayNumber - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(1);
