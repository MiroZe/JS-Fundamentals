function schoolGrade(input) {

    let classGrade = {};

    for (let line of input) {
        let currentLine = line.split(' ')
        let currentName = currentLine.shift();
        let currentGrades = currentLine;

        if (classGrade[currentName]) {
            for (let element of currentGrades) {
                classGrade[currentName].push(element)
            }

        } else {
            classGrade[currentName] = currentGrades;
        }

    }
    for (const key in classGrade) {
        let yearGrades = classGrade[key];
        let sumOfGrades = 0;
        for (grade of yearGrades) {
            sumOfGrades += Number(grade);
        }
        let averageGrade = sumOfGrades / yearGrades.length;
        classGrade[key] = averageGrade;
    }

    let sortedClass = Object.entries(classGrade);
    sortedClass.sort(([kA, vA], [kB, vB]) => kA.localeCompare(kB));
    sortedClass.forEach(schoolmate => {
        console.log(`${schoolmate[0]}: ${schoolmate[1].toFixed(2)}`);
    })
}
schoolGrade(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)