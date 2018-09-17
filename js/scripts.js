//business logic

function pigDice(players)  {
  this.player = players;
  this.score;
  this.buildingUpScore;
  this.PlayerCanPLayGame = new Boolean();
}
pigDice.prototype.startGame = function()  {
  this.score = 0;
  this.buildingUpScore = 0;
  this.PlayerCanPLayGame = true;
}
pigDice.prototype.playGame = function() {
  if (this.PlayerCanPLayGame) {
    var diceSide = pigRandom();

    if (diceSide != 1) {
     this.score +=diceSide;
     this.buildingUpScore +=diceSide;
  }else {
    diceSide = 0;
    this.score -=this.buildingUpScore;
    this.buildingUpScore = 0;
  }
  if (this.score >99 ) {
  alert("Congratulations " + this.player + ".You have won");
  this.endGame();
  }
}else {
  alert("startGame");
}
return diceSide;
}

pigDice.prototype.endGame = function()  {
this.score = 0;
this.PlayerCanPLayGame = false;
this.buildingUpScore = 0;
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
    player1 = new pigDice("player1");
    player1.startGame();
    player2 = new pigDice("player2");
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

  $("#hold").click(function(event){
    if (player1hasnotplayed) {
      player1.buildingUpScore = 0;
      player1hasnotplayed = false;
    }else {
      player2.buildingUpScore = 0;
      player1hasnotplayed = true;
    }
  });
});
