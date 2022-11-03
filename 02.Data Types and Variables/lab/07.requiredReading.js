function requiredReading(pages,pageForOneHr, days ) {
    
    let neededHrs = pages / pageForOneHr;
    let neededHrsPerDay =  neededHrs / days;
    console.log(neededHrsPerDay); 

}
requiredReading(432,
    15 ,
    4 
     )
