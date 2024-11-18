let playerName = document.querySelector("h1");
let errorOutput = document.querySelector("p");
let result = document.querySelector(".result")
let congimg = document.querySelector("img");
congimg.style.maxWidth = "180px"

let p1input = document.querySelector(".p1input");
let p2input = document.querySelector(".p2input");
let p3input = document.querySelector(".p3input");
let p4input = document.querySelector(".p4input");
let p1btn = document.querySelector(".p1btn");
let p2btn = document.querySelector(".p2btn");
let p3btn = document.querySelector(".p3btn");
let p4btn = document.querySelector(".p4btn");
let restart = document.querySelector(".restart");



let chances = document.querySelector(".chances");
let chancesMain = document.querySelector(".chancesMain")

let player1Number;
let player2Number;
let player3Number;

let chancesCount = 5;

playerName.innerHTML = "Player 1"





p1btn.addEventListener("click", () => {
    if (p1input.value == "") {
        errorOutput.innerHTML = "Please, Give a Number"
    } else {
        if (Number(p1input.value)) {

            if (p1input.value < 10 && p1input.value > 0) {

                player1Number = p1input.value

                errorOutput.innerHTML = ""

                playerName.innerHTML = "Player 2"

                displayCtrl("p2b")
                chancesCountDisplay()
            }
            else {
                errorOutput.innerHTML = "please, Give a Number into 1-9"
            }

        } else {
            errorOutput.innerHTML = "Please, Give a Number"
        }
    }
})






p2btn.addEventListener("click", () => {

    if (p2input.value == "") {
        errorOutput.innerHTML = "Please, Give a Number"
    } else {
        if (Number(p2input.value)) {

            if (p2input.value < 10 && p2input.value > 0) {
                chancesCount--
                chancesCountDisplay()
                errorOutput.innerHTML = ""

                if (chancesCount > 0) {

                    if (player1Number == p2input.value) {

                        playerName.innerHTML = "Player 3"
                        player2Number = p2input.value
                        displayCtrl("p3b")
                        chancesCount = 5
                        chancesCountDisplay()
                    } else {
                        errorOutput.innerHTML = "Your guess was wrong."
                    }

                } else {
                    playerName.innerHTML = "Player 3"
                    player2Number = p2input.value
                    displayCtrl("p3b")
                    chancesCount = 5
                    chancesCountDisplay()
                }

            } else {
                errorOutput.innerHTML = "please, Give a Number into 1-9"
            }

        } else {
            errorOutput.innerHTML = "Please, Give a Number"
        }
    }

})






p3btn.addEventListener("click", () => {

    if (p3input.value == "") {
        errorOutput.innerHTML = "Please, Give a Number"
    } else {
        if (Number(p3input.value)) {

            if (p3input.value < 10 && p3input.value > 0) {
                chancesCount--
                chancesCountDisplay()
                errorOutput.innerHTML = ""

                if (chancesCount > 0) {

                    if (player1Number == p3input.value) {

                        playerName.innerHTML = "Player 4"
                        player3Number = p3input.value
                        displayCtrl("p4b")
                        chancesCount = 5
                        chancesCountDisplay()
                    } else {
                        errorOutput.innerHTML = "Your guess was wrong."
                    }

                } else {
                    playerName.innerHTML = "Player 4"
                    player3Number = p3input.value
                    displayCtrl("p4b")
                    chancesCount = 5
                    chancesCountDisplay()
                }

            } else {
                errorOutput.innerHTML = "please, Give a Number into 1-9"
            }

        } else {
            errorOutput.innerHTML = "Please, Give a Number"
        }
    }

})






p4btn.addEventListener("click", () => {

    if (p4input.value == "") {
        errorOutput.innerHTML = "Please, Give a Number"
    } else {
        if (Number(p4input.value)) {

            if (p4input.value < 10 && p4input.value > 0) {
                chancesCount--
                chancesCountDisplay()
                errorOutput.innerHTML = ""

                if (chancesCount > 0) {

                    if (player1Number == p4input.value) {

                        congimg.src = "./congratulationsimg.gif"

                        if (player1Number == player2Number && player1Number == player3Number) {
                            result.innerHTML = "player 2, 3 & 4 winner"
                        } else if (player1Number == player2Number) {
                            result.innerHTML = "player 2 & 4 winner"

                        } else if (player1Number == player3Number) {
                            result.innerHTML = "player 3 & 4 winner"
                        }

                        playerName.innerHTML = ""
                        displayCtrl("all")
                    } else {
                        errorOutput.innerHTML = "Your guess was wrong."
                    }

                } else {

                    if (player1Number == player2Number && player1Number == player3Number) {
                        result.innerHTML = "player 2 & 3 winner"
                    } else if (player1Number == player2Number) {
                        result.innerHTML = "player 2 winner"

                    } else if (player1Number == player3Number) {
                        result.innerHTML = "player 3 winner"
                    } else {

                        result.innerHTML = "player 1 winner"
                    }

                    congimg.src = "./congratulationsimg.gif"
                    playerName.innerHTML = ""
                    displayCtrl("all")
                }

            } else {
                errorOutput.innerHTML = "please, Give a Number into 1-9"
            }

        } else {
            errorOutput.innerHTML = "Please, Give a Number"
        }
    }

})



















function chancesCountDisplay() {
    chancesMain.style.display = "block"
    chances.innerHTML = chancesCount
}


function displayCtrl(type) {
    if (type == "p2b") {
        p1input.style.display = "none"
        p1btn.style.display = "none"

        p3input.style.display = "none"
        p3btn.style.display = "none"

        p4input.style.display = "none"
        p4btn.style.display = "none"

        restart.style.display = "none"

        p2input.style.display = "inline-block"
        p2btn.style.display = "inline-block"


    } else if (type == "p3b") {
        p1input.style.display = "none"
        p1btn.style.display = "none"

        p2input.style.display = "none"
        p2btn.style.display = "none"

        p4input.style.display = "none"
        p4btn.style.display = "none"

        restart.style.display = "none"

        p3input.style.display = "inline-block"
        p3btn.style.display = "inline-block"


    } else if (type == "p4b") {
        p1input.style.display = "none"
        p1btn.style.display = "none"

        p2input.style.display = "none"
        p2btn.style.display = "none"

        p3input.style.display = "none"
        p3btn.style.display = "none"

        restart.style.display = "none"

        p4input.style.display = "inline-block"
        p4btn.style.display = "inline-block"

    }
    else if (type == "all") {
        p1input.style.display = "none"
        p1btn.style.display = "none"
        p2input.style.display = "none"
        p2btn.style.display = "none"
        p3input.style.display = "none"
        p3btn.style.display = "none"
        p4input.style.display = "none"
        p4btn.style.display = "none"
        chancesMain.style.display = "none"
        restart.style.display = "block"
        restart.addEventListener("click", () => { location.reload(); })
    }
}