 let score =
 JSON.parse(localStorage.getItem('score'))|| {
    win:0,
    lose:0,
    tie:0
 }
update(); 
 
 
 function playGame(playermove){
     const computerMove = computermove();
     let result = '';
     if(playermove === 'scissors'){
         
         if (computerMove === 'rock'){
             result = 'you lose';
            }
            else if ( computerMove === 'scissors' )
            {
                result = 'tie'
            }
            else if (computerMove === 'paper')
            {
                result = 'you win';
            };
            
        }
        
        
        else if(playermove === 'rock'){
            if (computerMove === 'rock'){
                result = 'tie';
            }
            else if ( computerMove === 'scissors' )
            {
                result = 'you win'
            }
        else if (computerMove === 'paper')
        {
            result = 'you lose';
        };
    }    
    else if (playermove === 'paper'){
        if (computerMove === 'rock'){
            result = 'you win';
        }
        else if ( computerMove === 'scissors' )
        {
            result = 'you lose'
        }
        else if (computerMove === 'paper')
        {
            result = 'tie';
        };
        
    }
    if(result==='you win'){
        score.win += 1
    } else if (result==='you lose'){
        score.lose += 1
    } else if (result==='tie'){
        score.tie += 1
    }
    
    localStorage.setItem('score', JSON.stringify(score));
    console.log (`bot played ${ computerMove} you played ${playermove},${result}
    losses ${score.lose} win ${score.win} tie${score.tie} ` );
    update();
    document.querySelector('.js-result').innerHTML= result;
    document.querySelector('.moves').innerHTML=`you ${playermove} - bot ${computerMove}`;
 }
 
function computermove(){
    const randomNumber = Math.random();
    let computerMove =  '' ;

        if (randomNumber >=0 && randomNumber < 1/3 )
        {
        computerMove = 'rock'
        }
        else if (randomNumber >= 1/3 && randomNumber < 2/3)
        {
        computerMove = 'paper'
        }
        else if (randomNumber>= 2/3 && randomNumber < 1) 
        {
        computerMove = 'scissors'   
        }

        return computerMove;
    }
    function update(){
        document.querySelector('.js-score')
        .innerHTML= ` losses ${score.lose} win ${score.win} tie${score.tie} ` 
    }
    


