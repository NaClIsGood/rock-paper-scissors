// 0 = rock //
// 1 = paper //
// 2 = scissors //

let playChoice;
let compChoice;
let playScore;
let compScore;

function getComputerChoice(){
    return Math.floor(Math.random()*3)
}

console.log(getComputerChoice);

