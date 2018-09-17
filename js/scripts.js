//business logic

function pigDice()  {
  this.player;
  this.score;
}
pigDice.prototype.startGame = function()  {
  this.score = 0;
}
pigDice.prototype.endGame = function()  {

}

//ui logic
$(document).ready(function(){
  $(".startGame").click(function(event){
    $(".game-showing").fadeToggle();
    event.preventDefault();
  });
});
