function getComputerChoice(){
    let choices = ["Rock","Paper","Scissors"];
    let i = Math.trunc(3*Math.random()); //This line generates a random int between 0 and 2 
    return choices[i];
}
function playRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === "rock"){
        if (computer === "paper") {
            return "You lost!, paper beats rock" ;
        }
        if (computer === "scissors"){
            return "You won! rock beats scissors" ;
        }
    }
    if (player === "paper"){
        if (computer === "scissors") {
            return "You lost!, scissors beats paper" ;
        }
        if (computer === "rock"){
            return "You won! paper beats rock" ;
        }
    } 
    if (player === "scissors"){
        if (computer === "rock") {
            return "You lost!, rock beats scissors" ;
        }
        if (computer === "paper"){
            return "You won! scissors beats paper" ;
        }
    }
    else{
        return "please make a valid choice";
    }
}
function game(){
    let numberOfPlayerwins = 0;
    let numberOfComputerwins = 0;
    for (let i = 0;i<5;i++){
        let player = prompt("Make your choice");
        let roundResult = playRound(player,getComputerChoice());
        let winRegExp = /You won/g;
        if (winRegExp.test(roundResult)){
            numberOfPlayerwins++;
            console.log("Round Won!");
        }
        else {
            numberOfComputerwins++;
            console.log("Round lost!");
        }
        console.log("Player :"+numberOfPlayerwins+"||"+numberOfComputerwins+" :Computer");
    }
    if (numberOfPlayerwins>numberOfComputerwins){
        console.log("You won\n");
    }
    if (numberOfPlayerwins < numberOfComputerwins) {
        console.log("You Lost!");
    }
    if (numberOfPlayerwins == numberOfComputerwins) {
        console.log("Equality");
    } 

    console.log("Player :"+numberOfPlayerwins+"||"+numberOfComputerwins+" :Computer");

}
game();