function army(input) {

    let officers =[];
    let leader = {};

    for (element of input) {
        
        if ( element.includes('arrives')) {
            element = element.replace(' arrives','');
            let name = element;
            let armyName = '';
            let quantity = 0;
            leader[name] = {armyName,quantity}
            
            officers.push(leader)
       } else if (element.includes(':')) {
            let result = element.split(':');
           let name = result.shift();
            let armyData = result.shift().trim().split(', ')
            let armyName = armyData[0];
            let quantity = Number(armyData[1]);
            let check = leader.hasOwnProperty(name);
            
            if(check) {
                leader.armyName = armyName;
                leader.quantity = quantity;
                
            }

        }else if(element.includes('+')) {
            element = element.split(' + ');
            let armyName = element[0];
            let quantity = Number(element[1]);
            let check = officers.find(x => x.armyName === armyName)
            let index = officers.indexOf(check);
            if(check) {  
                officers[index].quantity += quantity;
            }
        } else if( element.includes('defeated')) {
            element = element.split(' defeated');
            let name = element[0]
            let check = officers.find(x => x.name === name)
            let index = officers.indexOf(check);
            if(check) {
               let removed = officers.splice(index,1)
            }
        }

    }
     console.table(officers);

}
army(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])