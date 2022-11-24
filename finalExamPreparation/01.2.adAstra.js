function adAstra(input) {
    let text = input.shift();
    
    let pattern = /(#|\|)(?<product>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let totalCalories = 0;
    let products = [];
    

    let matches = text.matchAll(pattern);
    for(let match of matches) {
        let currentProduct = match.groups.product;
        let date = match.groups.date;
        let calories = Number(match.groups.calories)
        totalCalories += calories;
        products.push(`Item: ${currentProduct}, Best before: ${date}, Nutrition: ${calories}`)
    }
       
    let providedDays = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${providedDays} days!`);
    console.log(products.join('\n'));
    
}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])