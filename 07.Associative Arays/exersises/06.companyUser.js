function companyUser(input) {
  let employees = {};

  let line = input
    .map((el) => el.split(" -> "))
    .forEach((element) => {
      let [company, numberID] = element;
      if (!employees[company]) {
        employees[company] = [];
      }
      if (!employees[company].includes(numberID)) {
        employees[company].push(numberID);
      }
    });

  let sorted = Object.entries(employees).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  sorted.forEach((el) => {
    let [company, numbers] = el;
    console.log(company);
    for (let number of numbers) {
      console.log(`-- ${number}`);
    }
  });
}
companyUser([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
