function vacation(people, groupType, weekDay) {

    let totalPrice = 0;
    switch (weekDay) {
        case 'Friday':
            if (groupType === 'Students') {
                totalPrice = people * 8.45;
                if (people >= 30) {
                    totalPrice *= 0.85;
                }
            } else if (groupType === 'Business') {
                if (people >= 100) {
                    people -= 10
                }
                totalPrice = people * 10.90;
            } else if (groupType === 'Regular') {
                totalPrice = people * 15;
                if (people >= 10 && people <= 20) {
                    totalPrice *= 0.95;
                }
            }

            break;
        case 'Saturday':
            if (groupType === 'Students') {
                totalPrice = people * 9.80;
                if (people >= 30) {
                    totalPrice *= 0.85;
                }
            } else if (groupType === 'Business') {
                if (people >= 100) {
                    people -= 10
                }
                totalPrice = people * 15.60;
            } else if (groupType === 'Regular') {
                totalPrice = people * 20;
                if (people >= 10 && people <= 20) {
                    totalPrice *= 0.95;
                }
            }
            break;
        case 'Sunday':
            if (groupType === 'Students') {
                totalPrice = people * 10.46;
                if (people >= 30) {
                    totalPrice *= 0.85;
                }
            } else if (groupType === 'Business') {
                if (people >= 100) {
                    people -= 10
                }
                totalPrice = people * 16;
            } else if (groupType === 'Regular') {
                totalPrice = people * 22.50;
                if (people >= 10 && people <= 20) {
                    totalPrice *= 0.95;
                }
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday"
)