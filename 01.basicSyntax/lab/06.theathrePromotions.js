function theathrePromotions(type, age) {
  let price;
  let isAgeCorrect = true;
  if (age >= 0 && age <= 18) {
    switch (type) {
      case "Weekday":
        price = 12;
        break;
      case "Weekend":
        price = 15;
        break;
      case "Holiday":
        price = 5;
        break;
    }
  } else if (age > 18 && age <= 64) {
    switch (type) {
      case "Weekday":
        price = 18;
        break;
      case "Weekend":
        price = 20;
        break;
      case "Holiday":
        price = 12;
        break;
    }
  } else if (age > 64 && age <= 122) {
    switch (type) {
      case "Weekday":
        price = 12;
        break;
      case "Weekend":
        price = 15;
        break;
      case "Holiday":
        price = 10;
        break;
    }
  } else {
    isAgeCorrect = false;
    console.log("Error!");
  }
  if (isAgeCorrect) {
    console.log(price + "$");
  }
}
theathrePromotions("Weekday", 42);
theathrePromotions("Holiday", -12);
theathrePromotions("Holiday", 15);
