var canva;
var gameState=0
var contestantCount
var question
var contestant
var quiz
var database
var allContestants

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database()
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
 
}


function draw(){
  background("pink");
  if(contestantCount===2){
    quiz.update(1)
  }

  if(gameState===2){
    clear();
    quiz.play();
  }
  

  
}
