function matchDates(input) {

let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
let line = input.shift();
let dates = line.matchAll(pattern);
for ( const date of dates) {
    let day = date.groups.day
    console.log(`Day: ${day}, Month: ${date.groups.month}, Year: ${date.groups.year}`);
    
}
}
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])