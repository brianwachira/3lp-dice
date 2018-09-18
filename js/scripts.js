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
        this.PlayerCanPLayGame = false;
          }
return diceSide;
}
pigDice.prototype.resetGame = function() {

  this.score = 0;
  this.buildingUpScore = 0;
  this.PlayerCanPLayGame = true;
  resetUi();
}
function pigRandom()  {
  return Math.round(Math.random() * 6);
}

function resetUi() {
  $("#player1-roll").empty();
  $("#player1-score").empty();
  $("#player2-roll").empty();
  $("#player2-score").empty();
}
//ui logic
$(document).ready(function(){
  var player1;
  var player2;
  var playerhasnotplayed = new Boolean(true);
  var DiceRollResult = 0;
  var playWithComputer = new Boolean ();

  $(".custom-radio").click(function(event){
    playWithComputer = $("input:radio[name=play-with]:checked").val();
    console.log("Let me play with " + playWithComputer);
    event.preventDefault();
  });

  $("#show-rules").click(function(event){
    $(".rules-showing").fadeToggle();
  });

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
        player1.PlayerCanPLayGame = false;
        player2.PlayerCanPLayGame = false;
        player1.resetGame();
        player2.resetGame();
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
      player1.PlayerCanPLayGame = false;
      player2.PlayerCanPLayGame = false;
      player1.resetGame();
      player2.resetGame();
    }
  });
});
