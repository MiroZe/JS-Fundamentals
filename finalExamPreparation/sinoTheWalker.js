function sinoTheWalker(input) {

let startTime = input.shift();
let steps = Number(input.shift());
let secondsPerOneStep = Number(input.shift());
let timeInMinutes = startTime.split(':').map(el => Number(el))
let totalSeconds = steps * secondsPerOneStep;
let seconds = timeInMinutes[2];
let minutes = timeInMinutes[1];
let hours = timeInMinutes[0];
let timeInSeconds = (hours * 60 * 60 ) + (minutes * 60) + seconds + totalSeconds
let output = ''

let finalHrs = Math.floor((timeInSeconds / 60 / 60) % 24);
if(finalHrs <= 9) { 
    output +=`0${finalHrs}:`
} else {
    output +=`${finalHrs}:`
}

let finalMinutes =Math.floor((timeInSeconds / 60) % 60);
if(finalMinutes <= 9) {
    output +=`0${finalMinutes}:`
} else {
    output +=`${finalMinutes}:`
}
let finalSeconds = Math.floor(timeInSeconds % 60);
if(finalSeconds <= 9) {
    output +=`0${finalSeconds}`
} else {
    output +=`${finalSeconds}`
}
console.log(`Time Arrival: ${output}`);

}
sinoTheWalker(['12:30:30',
    '90',
    '1',
    ])