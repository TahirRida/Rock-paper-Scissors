function getComputerChoice(){
    let choices = ["Rock","Paper","Scissors"];
    let i = Math.trunc(3*Math.random()); //This line generates a random int between 0 and 2 
    return choices[i];
}
//Let's create a round function
function playRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    // Now we'll decide the result of the round based on playerSelection value
    //1- if the player chooses rock
    if (player === "rock"){
        //if the computer chooses rock
        if (computer === "paper") {
            return "You lost!, paper beats rock" ;
        }
        //if the computer chooses scissors
        if (computer === "scissors"){
            return "You won! rock beats scissors" ;
        }
        if (computer === "rock"){
            return "No winner, the computer chose rock" ;
        }
    }
    //2- if the player chooses paper
    if (player === "paper"){
        //if the computer chooses scissors
        if (computer === "scissors") {
            return "You lost!, scissors beats paper" ;
        }
        //if the computer chooses rock
        if (computer === "rock"){
            return "You won! paper beats rock" ;
        }
        if (computer === "paper"){
            return "No winner, the computer chose paper" ;
        }
    } 
    //3-if the player chooses scissors
    if (player === "scissors"){
        //if the compuer chooses rock
        if (computer === "rock") {
            return "You lost!, rock beats scissors" ;
        }
        //if the computer chooses paper
        if (computer === "paper"){
            return "You won! scissors beats paper" ;
        }
        if (computer === "scissors"){
            return "No winner, the computer chose scissors" ;
        }
    }
    //if the player choice is not valid
    else{
        return "please make a valid choice";
    }
}
//Let's create a game function knowing that a game is equal to 5 rounds.
function game(){
    let numberOfPlayerwins = 0; //initializing player's score
    let numberOfComputerwins = 0; //initializing computer's score
    // 5 rounds of the game
    for (let i = 0;i<5;i++){
        // a Round
        let player = prompt("Make your choice"); // getting the player0s choice
        let roundResult = playRound(player,getComputerChoice()); // plating the round
        let winRegExp = /You won/g; // a regular expression to test wether the player won or lost the round
        // if the player won the round
        if (winRegExp.test(roundResult)){
            numberOfPlayerwins++; //incrementing player's score
            console.log("Round Won!");
        }
        //if the player lost the round
        else {
            numberOfComputerwins++; //incrementing computer's score
            console.log("Round lost!");
        }
        //printing the result of the round
        console.log("Player :"+numberOfPlayerwins+"||"+numberOfComputerwins+" :Computer");
    }
    // Now we'll log the result of the game to the console
    //1- if the player won
    if (numberOfPlayerwins>numberOfComputerwins){
        console.log("You won\n");
    }
    //2- if the computer won:
    if (numberOfPlayerwins < numberOfComputerwins) {
        console.log("You Lost!");
    }
    //3-if there were no winner (i.e computer's score = player's score):
    if (numberOfPlayerwins == numberOfComputerwins) {
        console.log("Equality");
    } 
    //printing the result of the wohole game:

    console.log("Player :"+numberOfPlayerwins+"||"+numberOfComputerwins+" :Computer");

}
game();