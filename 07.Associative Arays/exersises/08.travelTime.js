function travelTime(input) {
  let destination = {};

  for (let line of input) {
    let [country, city, price] = line.split(" > ");
    price = Number(price);

    if (!destination.hasOwnProperty(country)) {
      destination[country] = {};
    }
    if (!destination[country].hasOwnProperty(city)) {
      destination[country][city] = price;
    } else {
      destination[country][city] = Math.min(destination[country][city], price);
    }
  }

  let sortedCountries = Object.keys(destination).sort((a, b) =>
    a.localeCompare(b)
  );

  for (country of sortedCountries) {
    let output = "";
    output += country + " -> ";
    let sortedCities = Object.keys(destination[country]).sort(
      (a, b) => destination[country][a] - destination[country][b]
    );
    for (city of sortedCities) {
      output += city + " -> ";
      output += destination[country][city] + " ";
    }
    console.log(output);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
