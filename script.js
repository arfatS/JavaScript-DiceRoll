var dice = document.querySelector('#dice');
var turn = document.querySelector('#turn');
var score1 = document.querySelector('#score1');
var score2 = document.querySelector('#score2');
var title = document.querySelector('#title');

var count = 0;
var player1 = 0;
var player2 = 0;
// var degree = 45;

function rotation(){
  // dice.style.transform = 'rotate('+degree+'deg)';
  // degree = degree + 45;
  dice.className = 'dice-rotation';
}

function roll() {
  count++;
  turn.disabled = true;

  var no = document.querySelector('#no'+count+'');
  no.style.background = "green";

  title.textContent = "Dice Roll"

  var interval = setInterval(rotation,15)
  turn.textContent = "Your turn...";

  setTimeout(()=>{
    clearInterval(interval);
    dice.className = '';

    dice.textContent = Math.ceil(Math.random()*6);
    player1 += Number(dice.textContent)
    score1.textContent = player1; 
  },1500)

  setTimeout(computer,2800)
}

function computer() {
  turn.textContent = "Computer's turn...";
  dice.style.background = '#ab81dd';

  dice.textContent = Math.ceil(Math.random()*6);
  player2 +=  Number(dice.textContent)
  score2.textContent = player2; 
  
  setTimeout(()=>{
    if (count >= 5) {
      reset()
    }
    turn.disabled = false;
    turn.textContent = "Roll Dice";
    dice.style.background = '#0daf7e';
  },1500);
}

function reset(){
  if(player1 > player2){
    title.textContent = "YOU WON..."
  }
  else if(player2 > player1){
    title.textContent = "COMPUTER WON..."
  }
  else{
    title.textContent = "IT'S A DRAW"
  }

  player1 = 0;
  player2 = 0;
  count = 0;

  var nos = document.querySelectorAll('.no');
  nos.forEach((no)=>{
    no.style.background = "white";
  })

}
