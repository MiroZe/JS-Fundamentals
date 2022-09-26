function spiceMustFlow(startingYeild) {
  let dayCounter = 0;
  let totalArea = startingYeild;
  let extractedSpices = 0;

  while (totalArea >= 100) {
    dayCounter++;
    extractedSpices += totalArea;
    if(extractedSpices < 26){
        extractedSpices -= extractedSpices;
      } else{
        extractedSpices -= 26;
      }
    totalArea = totalArea - 10;
  }
  if(extractedSpices < 26){
    extractedSpices -= extractedSpices;
  } else{
    extractedSpices -= 26;
  }
  
  console.log(dayCounter);
  console.log(extractedSpices);
}
spiceMustFlow(200);
