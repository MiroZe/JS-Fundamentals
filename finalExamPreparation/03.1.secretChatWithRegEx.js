function secretChat(input) {

    let message = input.shift();
    let line = input.shift();
    
    while(line !== 'Reveal') {
        let [command, value,replacement] = line.split(':|:');
        switch(command) {
            case 'InsertSpace' :
                let index = Number(value);
                let firstPart = message.substring(0,index);
                let secondPart = message.substring(index);
                message = firstPart + ' ' + secondPart;
                console.log(message);
                break;
    
            case 'Reverse' :
                let substring = value;
                if ( message.includes(substring)) {
                    message = message.replace(substring,'');
                    let reversed = substring.split('').reverse().join('');
                    message = message + reversed
                    console.log(message);
    
                } else {
                    console.log('error')
                }
    
                break;
            case 'ChangeAll' :
                let changeSubstring = value;
                message = message.replace(new RegExp(changeSubstring,'g'),replacement);
                console.log(message);
                break;
    
        }
    
        line = input.shift();
    }
        console.log(`You have a new text message: ${message}`)
    }
    secretChat([
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    
    ])
    