function employees(arrayOfNames) {
  class Employees {
    constructor(emplName, personalNumber) {
      this.name = emplName;

      this.personalNumber = personalNumber;
    }
    printName() {
      console.log(
        `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
      );
    }
  }

  for (let emplName of arrayOfNames) {
    let personalNumber = Number(emplName.length);
    let employees = new Employees(emplName, personalNumber);

    employees.printName();
  }
}
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
