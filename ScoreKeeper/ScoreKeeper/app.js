// Refactoring refactoring is the process of restructuring existing computer code—changing the factoring—without
 //changing its external behavior. Refactoring is intended to improve the design, structure, and/or
 // implementation of the software, while preserving its functionality.
 
 const scoreDetermining = document.querySelector("#score_determing")
 const resetBtn = document.querySelector("#resetBtn")

 let sectionValue = scoreDetermining.value
 let isGameOver = false
 let winningScore = 3
 
 const playerOne = {
    score: 0,
    display: document.querySelector("#player1Score"),
    button: document.querySelector("#p1Btn")
 }
const playerTwo = {
    score: 0,
    display: document.querySelector("#player2Score"),
    button: document.querySelector("#p2Btn")
}

playerOne.button.addEventListener("click", ()=>{
    updateScore(playerOne, playerTwo)
}) 

playerTwo.button.addEventListener("click", () =>{
    updateScore(playerTwo, playerOne)
})

resetBtn.addEventListener("click", reset)

scoreDetermining.addEventListener("change", (e) =>{
    sectionValue = e.target.value 
    reset()
})

function updateScore(player, oponent){ // generic function 
    if(!isGameOver){
    player.score += 1 
    player.display.innerText = player.score
    }
    const scoreDifference = Math.abs(player.score - oponent.score)
    winningScore = sectionValue
    console.log("winning score",winningScore)
    console.log("difference:",scoreDifference)
    console.log(sectionValue)

   if(player.score >= winningScore && scoreDifference >= 2) 
   {   isGameover = true
       player.display.classList.add("winner")
       oponent.display.classList.add("loser")
       player.button.disabled = true
       oponent.button.disabled = true
   }
}

function reset(){
    for(let p of [playerOne, playerTwo]){
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove("winner", "loser")
        winningScore = 3
    }
}
