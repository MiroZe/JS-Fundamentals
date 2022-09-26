function pyramid(base, increment){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let levelCounter = 0;


    for( let i = base; i > 1; i-=2 * increment){
        levelCounter++;
        let stage = i - 2 ;
        if( levelCounter % 5 === 0){
            
        }
        let currentStone = stage * stage
        stone += currentStone
        let currentMarble = i * i - currentStone;
        marble += currentMarble
        
        
    
    }


    console.log(stone)
    console.log(marble);

}
pyramid(11,1)
