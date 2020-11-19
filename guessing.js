var numberWon=0;
var numberLose=0;
for(var i=1;i<=5;i++){

  var userNumber= parseInt(prompt("First you read the rules of the game.Then Enter Your Number between 1 to 5"));
  var reggisterName=Math.floor(Math.random()*5)+1;

  if(userNumber===reggisterName){

    console.log("You guess is correct");
    numberWon++
  }else{

    console.log("You are wrong"+"the correct answer is"+" => "+reggisterName);
    numberLose++
  }
}

document.querySelector(".number").innerHTML=""+numberWon*10+"<br>";

