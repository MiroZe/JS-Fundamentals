function arrayModifier(input) {

  let initialArray = input.shift().split(' ').map(x => x = Number(x));
  
  let line = input.shift()

  while(line !== 'end') {
    let commandLine = line.split(' ')
    let command = commandLine[0];
    let index1 = Number(commandLine[1]);
    let index2 = Number(commandLine[2]);
    
    switch(command) {
      case 'swap' :
        let swapElement1 = initialArray[index1];
        let swapElement2 = initialArray[index2];
        initialArray.splice(index1,1,swapElement2);
        initialArray.splice(index2,1,swapElement1);
        
        break;

      case 'multiply' :
        let multiplyElement1 = initialArray[index1];
        let multiplyElement2 = initialArray[index2];
        let result = multiplyElement1 * multiplyElement2;
        
        initialArray.splice(index1,1,result);
        break;
      case 'decrease' :

      initialArray = initialArray.map(x => x = x - 1);

    }
    line = input.shift();
  }
console.log(initialArray.join(', '));

}
arrayModifier( [
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
]

)