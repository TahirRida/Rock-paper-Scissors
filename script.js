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
//Let's initialize the counters of playerWins and Computer Wins
let numberOfPlayerwins = 0,
    numberOfComputerwins = 0;
//Let's create a game function
/*function game(player){
    // 5 rounds of the game
   while (numberOfPlayerwins != 5 && numberOfComputerwins != 5){
            // a Round
            console.log(player);
            let choices = ["rock","paper","scissors"];
            if(choices.includes(player)){
                let roundResult = playRound(player,getComputerChoice()); // plating the round
                let winRegExp = /You won/g; // a regular expression to test wether the player won.
                let losRegExp = /You lost/g; // a regular expression to test wether the player lost.
                // if the player won the round
                if (winRegExp.test(roundResult)){
                    numberOfPlayerwins++; //incrementing player's score
                    console.log("Round Won!");
                }
                //if the player lost the round
                if(losRegExp.test(roundResult)) {
                    numberOfComputerwins++; //incrementing computer's score
                    console.log("Round lost!");
                }
                //printing the result of the round
                console.log("Player :"+numberOfPlayerwins+"||"+numberOfComputerwins+" :Computer");
            }

            }
    //printing the result of the wohole game:
    if (numberOfPlayerwins > numberOfComputerwins){
        console.log("You Won!");
    }
    else{
        console.log("You lost!");
    }
    console.log("Player :"+numberOfPlayerwins+"||"+numberOfComputerwins+" :Computer");

}
*/
var player ;
window.addEventListener("click",(e)=>{
    player = e.target.id;
    if (numberOfComputerwins != 5 && numberOfPlayerwins != 5){
        let roundResult = playRound(player,getComputerChoice()); // plating the round
        let winRegExp = /You won/g; // a regular expression to test wether the player won.
        let losRegExp = /You lost/g; // a regular expression to test wether the player lost.
        // if the player won the round
        if (winRegExp.test(roundResult)){
            numberOfPlayerwins++; //incrementing player's score
            
        }
        //if the player lost the round
        if(losRegExp.test(roundResult)) {
            numberOfComputerwins++; //incrementing computer's score
            roundResult += " .You still have the chance";
        }
        let roundResultdiv = document.querySelector(".Round-Result") //
        roundResultdiv.textContent = roundResult;
        //printing the result of the round
        let numberOfPlayerwinsdiv = document.querySelector(".humanScore");
        numberOfPlayerwinsdiv.textContent = numberOfPlayerwins;
        let numberOfComputerwinsdiv = document.querySelector(".computerScore");
        numberOfComputerwinsdiv.textContent = numberOfComputerwins;
        if ( numberOfComputerwins === 5){
            roundResultdiv.textContent = "You Lost the game!"
        }
        if (numberOfPlayerwins === 5){
            roundResultdiv.textContent = "You won!,You saved the world!"
            let audio = document.querySelector(".audio");
            audio.play();
        }
    }

})
function restart(){
    numberOfComputerwins = 0;
    numberOfPlayerwins = 0;
}