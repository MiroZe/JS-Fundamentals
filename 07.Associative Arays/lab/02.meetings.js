function meetings(input) {

    let scheduleList = {};

    input.forEach(element => {
        let [weekday, name] = element.split(' ');

        if (scheduleList[weekday]) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            console.log(`Scheduled for ${weekday}`);
            scheduleList[weekday] = name
        }


    });
    for (const key in scheduleList) {

        console.log(`${key} -> ${scheduleList[key]}`);

    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)