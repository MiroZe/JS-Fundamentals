function cats(arr) {
    
    class Cat {
        constructor(catName, age) {
            this.catName = catName
            this.age = age
        }
        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    let catArray = [];
    for ( let i = 0; i < arr.length;i++) {
        let catData = arr[i].split(' ');
        let cats = new Cat(catData[0],Number(catData[1]));
        catArray.push(cats)
    }
   
    for(let cat of catArray) {
        cat.meow()
    }

}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])