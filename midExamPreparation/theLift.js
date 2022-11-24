function lift(input) {
  let waitingPeople = Number(input.shift());
  let wagonStatus = input[0].split(" ").map((x) => Number(x));
  const maxCapacity = 4;

  for (let i = 0; i < wagonStatus.length; i++) {
    let currentWagon = wagonStatus[i];
    if ( currentWagon < maxCapacity) {
        if (currentWagon + waitingPeople <= maxCapacity) {
            wagonStatus[i] = currentWagon + waitingPeople;
          waitingPeople = 0;
        
        } else if (currentWagon + waitingPeople > maxCapacity) {
          waitingPeople -= maxCapacity - currentWagon;
          wagonStatus[i] = maxCapacity;
        }

    }
    
  }
  
let isTrainFull = true;
for(const elem of wagonStatus) {
 if (elem < maxCapacity) {
    isTrainFull = false;
    break;
 } 
}
if(isTrainFull && waitingPeople > 0) {
    console.log(`There isn't enough space! ${waitingPeople} people in a queue! \n${wagonStatus.join(' ')}`);
} else if (isTrainFull && waitingPeople === 0 ){
    console.log(wagonStatus.join(' '));
    
} else {
    console.log(`The lift has empty spots! \n${wagonStatus.join(' ')}`);
}
}
lift([
    "20",
    "0 2 0"
   ]
   
   
   );
