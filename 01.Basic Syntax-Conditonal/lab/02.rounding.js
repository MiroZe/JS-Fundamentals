function rounding(number, precision) {

    let formattedPrecision = Number(precision)
    if (formattedPrecision > 15) {
        formattedPrecision = 15;
    }
    console.log(parseFloat(number.toFixed(formattedPrecision)));


}
rounding(10.5, 3)