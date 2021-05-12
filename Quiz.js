class Quiz{
constructor(){}
getState(){
var gameStateref=database.ref('gameState')
gameStateref.on("value",function(data){
    gameState=data.val();
})
}

update(state){
database.ref('/').update({
    gameState:state
})    
}
async start(){
    if(gameState===0){
        contestant=new Contestant();
        var contestantCountref=await database.ref('contestantCount').once('value')
        if(contestantCountref.exists()){
            contestantCount=contestantCountref.val();
            contestant.getCount();
        }
        question=new Question();
        question.display();
    }
}

play(){
    question.hide();
    background("yellow")
    var displayAnswer=500
    textSize(20)
    text("Result of the quiz",300,50)
    Contestant.getPlayerInfo();

    if(allContestants!==undefined){
        for(var plr in allContestants){
            textSize(20)
            text("contestants who answered correct are highlighted in green colour",300,500)
            var correctAnswer = "2";
            if (correctAnswer ===allContestants[plr].answer)
                fill("Green")
                else{
                    fill("red")
                }
                displayAnswer+=30
                textSize(20)
                text(allContestants[plr].name+": "+allContestants[plr].answer,500,displayAnswer)
        }
    }
}















}
