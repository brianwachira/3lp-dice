//business logic

function pigDice()  {
  this.player;
  this.score;
}
pigDice.prototype.startGame = function()  {
  this.score = 0;
  console.log("game started succesfully");
}
pigDice.prototype.endGame = function()  {

}

//ui logic
$(document).ready(function(){
  $(".startGame").click(function(event){
    $(".game-showing").fadeToggle();
    event.preventDefault();
  });

  $("#roll").click(function(event){
    var player1 = new pigDice();
    player1.startGame();
  });
});
