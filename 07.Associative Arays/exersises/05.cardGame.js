function cardGame(input) {
    let cardGame = {}

    for (let line of input) {
        let token = line.split(': ');
        let playerName = token.shift();
        let currentToken = token;
        if (!cardGame[playerName]) {
            cardGame[playerName] = [];
        }
        for (card of currentToken) {
            let currenHandOftCards = card.split(', ');
            for (card of currenHandOftCards) {
                if (!cardGame[playerName].includes(card)) {
                    cardGame[playerName].push(card);
                }
            }

        }
    }

    for (line in cardGame) {
        let myCards = (cardGame[line])
        let sum = 0;
        for (let i = 0; i < myCards.length; i++) {
            let currentCard = myCards[i].split('');
            let firstDigit = currentCard[0];

            let secondDigit = currentCard[1];
            if (firstDigit === '1') {
                firstDigit = 10;
                secondDigit = currentCard[2];
            }

            if (firstDigit === 'J') {
                firstDigit = 11;
            } else if (firstDigit === 'Q') {
                firstDigit = 12;
            } else if (firstDigit === 'K') {
                firstDigit = 13;
            } else if (firstDigit === 'A') {
                firstDigit = 14;
            }
            if (secondDigit === 'S') {
                secondDigit = 4;
            } else if (secondDigit === 'H') {
                secondDigit = 3;
            } else if (secondDigit === 'D') {
                secondDigit = 2;
            } else if (secondDigit === 'C') {
                secondDigit = 1;
            }
            let currentsum = firstDigit * secondDigit;
            sum += currentsum;
            cardGame[line] = sum;

        }

        console.log(`${line}: ${cardGame[line]}`)


    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]

)