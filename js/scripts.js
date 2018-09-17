//business logic

function pigDice()  {
  this.player;
  this.score;
  this.buildingUpScore;
}
pigDice.prototype.startGame = function()  {
  this.score = 0;
  this.buildingUpScore = 0;
}
pigDice.prototype.playGame = function() {
  var diceSide = pigRandom();

  if (diceSide != 1) {
   this.score +=diceSide;
   this.buildingUpScore +=diceSide;
}else {
  alert("score goes back to 0");
  diceSide = 0;
  this.score -=this.buildingUpScore;
  this.buildingUpScore = 0;
}
return diceSide;
}
pigDice.prototype.endGame = function()  {

}

function pigRandom()  {
  return Math.round(Math.random() * 6);
}
//ui logic
$(document).ready(function(){
  var player1;
  var player2;
  var player1hasnotplayed = new Boolean(true);
  var DiceRollResult = 0;
  $(".startGame").click(function(event){
    $(".game-showing").fadeToggle();
    player1 = new pigDice();
    player1.startGame();
    player2 = new pigDice();
    player2.startGame();
    event.preventDefault();
  });

  $("#roll").click(function(event){
    if (player1hasnotplayed) {
      DiceRollResult = player1.playGame();
      $("#player1-roll").text(DiceRollResult);
      $("#player1-score").text(player1.score);
      player1hasnotplayed = false;
    }else {
      DiceRollResult = player2.playGame();
      $("#player2-roll").text(DiceRollResult);
      $("#player2-score").text(player2.score);
      player1hasnotplayed = true;
    }
  });
});
