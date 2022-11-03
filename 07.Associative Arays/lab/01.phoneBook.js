function phoneBook(input) {
    let phoneBook = {};
  
    for (let line of input) {
      let [name, phoneNumber] = line.split(" ");
      phoneBook[name] = phoneNumber;
    }
  
    for (let elements in phoneBook) {
      console.log(`${elements} -> ${phoneBook[elements]}`);
    }
  }
  phoneBook(['Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344']
 )