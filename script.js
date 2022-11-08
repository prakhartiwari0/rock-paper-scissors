function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let compchoice = choices[Math.floor(Math.random()*choices.length)];
    return compchoice;
}


function game_engine(computer_choice, player_choice){
    let result;
    let action;
    let who_won;
    player_choice = player_choice.toLowerCase();

    if(player_choice!="rock"||"paper"||"scissors"){
        result = "won by Computer!"
        action = "You didn't chose a valid option, so computer wins"
        who_won = "c"

    }
    else if (computer_choice == player_choice) {
        result = "DRAW"
        action = "Both are equally powerful!"
        who_won = "none"
    }

    
    else if (computer_choice=="rock" && player_choice=="paper"){
        result = "won by You!"
        action = "Paper surrounds the rock and kills it!!!"
        who_won = "h"
    }
    
    else if (computer_choice=="paper" && player_choice=="rock"){
        result = "won by Computer!"
        action = "Paper surrounds the rock and kills it!!!"
        who_won = "c"
    }
    
    else if (computer_choice=="paper" && player_choice=="scissors"){
        result = "won by You!"
        who_won = "h"
        action = "Scissors cut the paper into pieces and kills it!!!"
    }
    
    else if (computer_choice=="scissors" && player_choice=="paper"){
        result = "won by Computer!"
        action = "Scissors cut the paper into pieces and kills it!!!"
        who_won = "c"
    }
    
    else if (computer_choice=="scissors" && player_choice=="rock"){
        result = "won by You!"
        action = "Rock hit the Scissors and kills it!!!"
        who_won = "h"
    }
    
    else if (computer_choice=="rock" && player_choice=="scissors"){
        result = "won by Computer!"
        action = "Rock hit the Scissors and kills it!!!"
        who_won = "c"
    }
    return [result, action, who_won]
}
function playRound(){
    let player_choice = prompt("Rock, Paper, or Scissors?");
    let computer_choice = getComputerChoice()
    let output_text = game_engine(computer_choice, player_choice);
    let game_Results = `You chose ${player_choice} and Computer chose ${computer_choice}\n${output_text[1]}`
    winner = output_text[2]
    return [game_Results, winner]
}

function mainGame(){
    console.log("ROCK-PAPER-SCISSORS GAME\nRule: If you don't chose a valid option, then the round will be won by computer.")
    let computer_points = 0;
    let human_points = 0;
    for (let i = 1; i<11; i++){
        let game_output = playRound()
        if (game_output[1]=="c"){computer_points = computer_points+1}
        else if (game_output[1]=="h"){human_points = human_points+1}

        console.log(`Round ${i}\n\n${game_output[0]}\n\nYour Points: ${human_points}\nComputers Points: ${computer_points}`)
    }
    if(computer_points>human_points){
        final_winner = "Computer"
    }
    else if(computer_points<human_points){
        final_winner = "You"
    }
    else if(computer_points==human_points){
        final_winner = "Nobody"
    }
    console.log(`Your Points: ${human_points}\nComputers Points: ${computer_points}\n\nThe Game is won by ${final_winner}`)

}

mainGame()


