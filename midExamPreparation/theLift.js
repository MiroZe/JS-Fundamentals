function theLift(arr) {
  let waitingPeople = Number(arr.shift());
  let liftStatus = arr[0].split(" ");
  let seatsCapacity = 4;
  let resultArr = [];

  for (let i = 0; i < liftStatus.length; i++) {
    let emptySeats = Number(liftStatus[i]);
    let diff = seatsCapacity - emptySeats;
    if (waitingPeople <= 0) {
      break;
    }
    if (waitingPeople > seatsCapacity) {
      resultArr[i] = seatsCapacity;
    } else if(waitingPeople < seatsCapacity && waitingPeople > 0) {
      resultArr[i] = diff;
    }

    waitingPeople -= diff;
  }
  if (waitingPeople <= 0) {
    console.log("The lift has empty spots!");
  } else {
    console.log(
      `There isn't enough space! ${waitingPeople} people in a queue!`
    );
  }

  console.log(resultArr.join(" "));
}
theLift(["20","0 2 0"]);
