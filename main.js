let btnSteenJS = document.getElementById("btnsteen")
let btnPapierJS = document.getElementById("btnpapier")
let btnSchaarJS = document.getElementById("btnschaar")
var getal = new Array ("steen" ,"papier","schaar")

gewonnen = "Je hebt gewonnen"
gelijk = "Het is gelijk geeindigd"
verlies = "je hebt verloren."
getal[0] = "steen"
getal[1] = "papier"
getal[2] = "schaar"
let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const results_span = document.getElementById("results")

// Wanneer je wint hebt gewonnen.
function win(){
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    console.log(gewonnen)
    document.getElementById("antwoord").innerHTML = "You Win!🔥"
}

// Wanneer je verliest. 
function lose(){
    computerScore++
    computerScore_span.innerHTML = computerScore
    userScore_span.innerHTML = userScore
    console.log(verlies)
    document.getElementById("antwoord").innerHTML = "You lost!😞"
}
// Wanneer het gelijk spel is geworden. 
function tie(){
    console.log(gelijk)
    document.getElementById("antwoord").innerHTML = "It's a tie!🤝"
}

btnSteenJS.addEventListener("click", btnSteenFunctie)
btnPapierJS.addEventListener("click" , btnPapierFunctie)
btnSchaarJS.addEventListener("click" , btnSchaarFunctie)

// Steen functie. 
function btnSteenFunctie(){
    nummer = Math.floor(Math.random() * 3)
    const computerKeuze = getal[nummer]
    console.log("Computerkeuze: "+computerKeuze)

    if(computerKeuze == "papier"){
        lose()
    } else if(computerKeuze =="schaar"){
        win()
    } else{
        tie()
    }
}

// Papier functie. 
function btnPapierFunctie(){
    nummer = Math.floor(Math.random() * 3)
    const computerKeuze = getal[nummer]
    console.log("Computerkeuze: "+computerKeuze)

    if(computerKeuze == "schaar"){
        lose()
    } else if(computerKeuze =="steen"){
        win()
    } else{
        tie()
    }
}

// Schaar functie. 
function btnSchaarFunctie(){
    nummer = Math.floor(Math.random() * 3)
    const computerKeuze = getal[nummer]
    console.log("Computerkeuze: "+computerKeuze)

    if(computerKeuze == "steen"){
        lose()
    } else if(computerKeuze =="papier"){
        win()
    } else{
        tie()
    }
}