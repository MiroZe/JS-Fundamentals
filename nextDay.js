function nextDay(year, month, day){
    let currentYear = Number(year);
    let currentMonth = Number(month);
    let currentDay = Number(day);
    
    let nextDay = 0;
    if( currentMonth === 12 && currentDay === 31){
        currentYear = currentYear + 1;
        currentMonth = 1;
        nextDay = 1;
    } else if(currentMonth === 2 && currentDay < 28){
        nextDay = currentDay + 1;
        
    } else if(currentMonth === 2 && currentYear % 4 === 0 && currentDay === 28){
        nextDay = currentDay + 1;
    } else if(currentMonth === 2 && currentDay >=28){
        nextDay = 1;
        currentMonth = currentMonth + 1;
    } else if( currentMonth % 2 === 0 && currentDay < 31){
        nextDay = currentDay +1
    } else if(currentMonth % 2 === 0 && currentDay >= 31){
        nextDay = 1;
        currentMonth = currentMonth + 1;
    } else if( currentMonth % 2 !== 0 && currentDay < 30){
        nextDay = currentDay + 1;
    } else if( currentMonth % 2 !== 0 && currentDay >= 30){
        nextDay = 1;
        currentMonth = currentMonth + 1;
    }
    
 console.log(`${currentYear}-${currentMonth}-${nextDay}`)
}
nextDay(2016, 2, 28)