function blackFlag(arr) {
  let days = Number(arr[0]);
  let expected = Number(arr[2]);
  let plunderForDay = Number(arr[1]);
  dayCounter = 0;
  let gatheredMoney = 0;

  for (let i = 0; i < days; i++) {
    dayCounter++;
    gatheredMoney += plunderForDay;
    if (dayCounter % 3 === 0) {
      gatheredMoney += plunderForDay * 0.5;
    }
    if (dayCounter % 5 === 0) {
      gatheredMoney -= gatheredMoney * 0.3;
    }
  }
  if (gatheredMoney >= expected) {
    console.log(`Ahoy! ${gatheredMoney.toFixed(2)} plunder gained.`);
  } else {
    let percentOfExpected = (gatheredMoney / expected) * 100;
    console.log(
      `Collected only ${percentOfExpected.toFixed(2)}% of the plunder.`
    );
  }
}
blackFlag(["10", "20", "380"]);
