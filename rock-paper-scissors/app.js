let userScore = 0;
let compScore = 0;
// Get the document element id for scores (stores dom elements)
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    // array of choices that a computer can make
    const choices = ['r', 'p', 's'];
    //Math floor rounds the number down
    const randomNumber = Math.floor(Math.random()* 3);

    return choices[randomNumber];

}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    
    // increase the users score
    userScore ++;
    // Show it on the webpage
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    // adds a class to a div on what ever the user clicks on
    userChoice_div.classList.add('green-glow');
    // ES6 CODE
    setTimeout(() => userChoice_div.classList.remove('green-glow') , 300);
}
function lose(userChoice, computerChoice){
    // increase the computers score
    compScore ++;
    // Show it on the webpage
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
     // adds a class to a div on what ever the user clicks on
     userChoice_div.classList.add('red-glow');
     
     setTimeout(() =>  userChoice_div.classList.remove('red-glow') , 300);
}
function draw(userChoice, computerChoice){
   
   // Show it on the webpage
   const smallUserWord = "user".fontsize(3).sup();
   const smallCompWord = "comp".fontsize(3).sup();
   const userChoice_div = document.getElementById(userChoice);
   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Its a draw!`;
    // adds a class to a div on what ever the user clicks on
    userChoice_div.classList.add('gray-glow');
    //setTimeout(function() { userChoice_div.classList.remove('gray-glow')} , 300);
    setTimeout(() =>  userChoice_div.classList.remove('gray-glow') , 300);
}
function game(userChoice){
    
    // get the computer choice
    const computerChoice = getComputerChoice();
 

    // compare the choices
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){

// add event listeners to the buttons 
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
}

// Calling main
main();