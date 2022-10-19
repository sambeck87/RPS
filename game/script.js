console.log("Hi player. Good look!!!");

function getComputerChoice() {
  let n = Math.random(1) * 3;
  n = Math.ceil(n);
  switch (n) {
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    case 3:
      return "rock";
      break;
  }
}

function playRound(playerSelection, cpuSelection) {
  if (playerSelection == "rock" && cpuSelection == "paper") {
    return "You Lose! Paper beats Rock"
  }
  if (playerSelection == "paper" && cpuSelection == "scissors") {
    return "You Lose! Scissors beats Paper"
  }
  if (playerSelection == "scissors" && cpuSelection == "rock") {
    return "You Lose! Rock beats Scissors"
  }
  if (cpuSelection == "rock" && playerSelection == "paper") {
    return "You Win! Paper beats Rock"
  }
  if (cpuSelection == "paper" && playerSelection == "scissors") {
    return "You Win! Scissors beats Paper"
  }
  if (cpuSelection == "scissors" && playerSelection == "rock") {
    return "You Win! Rock beats Scissors"
  }
  if (cpuSelection == playerSelection) {
    return "Draw!!!!"
  }
}

function game(){
  let user=0;
  let cpu=0;
  let draw=0;
  for(let i=0; i<5; i++){
    let jugada="";
let cont=false;
while(cont==false){
jugada = prompt('Your move?:', '');
jugada=jugada.toLowerCase();
if(jugada=="rock" || jugada=="scissors" || jugada=="paper"){
  break;
}
  console.log("Try again");
}
let result=playRound(jugada, getComputerChoice());
console.log(result);
if(result.includes("You Win")){
  user++;
}
if(result.includes("You Lose")){
  cpu++;
}
if(result.includes("Draw")){
  draw++;
}
}

if(cpu>user){
  document.querySelector('#show').textContent='YOU LOSE!!! :(';
}
if(cpu<user){
  document.querySelector('#show').textContent='YOU WON!!! :)';
}
if(cpu==user){
  document.querySelector('#show').textContent='YOU DRAW!!! :/';
}

  let final="CPU Won "+cpu+ " times - You Won "+user+" times. You Draw "+draw+" times.";
  return final;
}
console.log(game());