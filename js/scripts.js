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
  pigDice.PlayerCanPLayGame = false;
  }
}else {
  alert("startGame");
}
return diceSide;
}

function pigRandom()  {
  return Math.round(Math.random() * 6);
}

function resetGame(player1,player2) {
  player1.score = 0;
  player2.Score = 0;
  player1.buildingUpScore = 0;
  player2.buildingUpScore = 0;

  $("#player1-roll").empty();
  $("#player1-score").empty();
  $("#player2-roll").empty();
  $("#player2-score").empty();

  player1.PlayerCanPLayGame = true;
  player2.PlayerCanPLayGame = true;
}
//ui logic
$(document).ready(function(){
  var player1;
  var player2;
  var playerhasnotplayed = new Boolean(true);
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
    if (player1.PlayerCanPLayGame && player2.PlayerCanPLayGame) {
      if (playerhasnotplayed) {
        DiceRollResult = player1.playGame();
        $("#player1-roll").text(DiceRollResult);
        $("#player1-score").text(player1.score);
        playerhasnotplayed = false;
      }else {
        DiceRollResult = player2.playGame();
        $("#player2-roll").text(DiceRollResult);
        $("#player2-score").text(player2.score);
        playerhasnotplayed = true;
      }
    }else {
        resetGame(player1,player2);
    }
  });

  $("#hold").click(function(event){
    if (player1.PlayerCanPLayGame && player2.PlayerCanPLayGame) {
      if (playerhasnotplayed) {
        player1.buildingUpScore = 0;
        playerhasnotplayed = false;
      }else {
        player2.buildingUpScore = 0;
        playerhasnotplayed = true;
      }
    }else {
      resetGame(player1,player2);
    }
  });
});
