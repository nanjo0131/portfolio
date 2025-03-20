const squareEls = document.querySelectorAll('div');
const statusEl = document.querySelector('p');
const recordsEl = document.querySelector('ol');
console.log(squareEls);

let stepNum = 0;
const board = ['', '', '','', '', '','', '', ''];

const setBoard = (board2) => {
    for(let i=0; i<squareEls.length; i++){
        squareEls[i].textContent = board2[i];
    }
}
setBoard(board);


const onClick = (e) => {
    if(e.target.textContent !== "") return;
   
    e.target.textContent = stepNum % 2 === 0 ? 'X' : 'O';
    board[0] = stepNum%2 === 0 ? 'X' : 'O';
    stepNum++;

    statusEl.textContent = 'Next player: ' + (stepNum%2 === 0 ? 'X' : 'O');
   
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = 'Go to move #' + stepNum;
   
    recordsEl.appendChild(li).appendChild(button);


    console.log(board);
}
 
for(let i = 0; i < 9; i++){
    squareEls[i].addEventListener('click', onClick);
    squareEls[i].dataset.index = i;
}



//  for(i = 0; i < 9; i++) {
//     if(i % 2 == 1){
//         squareEl.textContent ='O';
//     };
// };

 // if(xIsNext){
    //     if(e.target.innerText === ""){
    //         e.target.textContent = 'X';
    //         xIsNext = false;
    //     }}
    // else if(e.target.innerText === ""){
    //     e.target.textContent = 'O';
    //     xIsNext = true;
    // }



    // const e = {
//     target:{
//         textContent:'',
//     }
// }
// e.target.textContent  = 'abc'