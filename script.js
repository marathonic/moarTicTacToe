const Gameboard = (()=> {

    const boardTally = [];

    const Player = (name) => {
        return{ name };
    }

    const drawGrid = (() => {
        for(let i = 0; i < 9; i++){
            let sq$ = document.createElement('div');
            document.querySelector('.container').appendChild(sq$);
            sq$.classList.add('square');
        }
    })();
    
    let counter = 0;

    const plugShape = (evt) => {
        if(evt.target.innerHTML) return;
        let shape = 'X';
        if(boardTally[boardTally.length-1] == 'X'){
            shape = 'O';
        }  
        evt.target.innerHTML = shape;
        boardTally.push(evt.id=counter, shape)
        console.log(boardTally);
        ++counter;
    }

    const checkForWin = (() => {
        // let sq1 = document.querySelector('.square:nth-of-typeof(1)');
        // sq1.classList.add('test-red');
        
    })();


    const divs = document.querySelector('.container');
    divs.addEventListener('click', plugShape);

})();
