function gladiatorInventory(input) {

    let inventory = input.shift().split(' ')

    for(let i = 0; i < input.length; i++) {
        let [command, item] = input[i].split(' ') ;
        let isAlreadyExist = inventory.includes(item);
        let index = inventory.indexOf(item);
        switch (command) {

            case 'Buy' :
                if(! isAlreadyExist) {
                    inventory.push(item);
                }
                break;
            case 'Trash' :
                if (isAlreadyExist) {

                    inventory.splice(index,1);
                }
                break;
            case 'Repair' :
                if(isAlreadyExist) {

                    let repaired = inventory.splice(index,1).join(' ');
                    inventory.push(repaired);
                }
                break;
            case 'Upgrade' :
                let upgraded = item.split('-');
                let itemToUpdate = upgraded[0];
                let updated = upgraded.join(':');
                isAlreadyExist = inventory.includes(itemToUpdate);
                index = inventory.indexOf(itemToUpdate)
                if(isAlreadyExist) {

                    inventory.splice(index +1 ,0,updated);
                }
                break;
        }
    }
    console.log(inventory.join(' '))

}
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']

)