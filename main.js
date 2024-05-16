class Game
{
    constructor(chosen) {
        this.#userInput(chosen);
    } 

    #win()
    {
        document.getElementById("winner").innerText = "You won!";
        document.getElementById("your-score").innerText = parseInt(document.getElementById("your-score").innerText) + 1;
    }
    
    #draw()
    {
        document.getElementById("winner").innerText = "Draw!";
    }

    #lose()
    {
        document.getElementById("winner").innerText = "You lost!";
        document.getElementById("computer-score").innerText = parseInt(document.getElementById("computer-score").innerText) + 1;
    }

    #rockPaperScissors() {
        const chosen = Math.floor(Math.random() * 3 + 1);
        if (chosen == 1) {
            document.getElementById("computer-chose").innerText = "Computer chose Rock!";
            return "Rock";
        } 
        else if (chosen == 2) {
            document.getElementById("computer-chose").innerText = "Computer chose Paper!";
            return "Paper";
        } 
        else if (chosen == 3) {
            document.getElementById("computer-chose").innerText = "Computer chose Scissors!";
            return "Scissors";
        }
    }

    #userInput(input) {
        const chosen = this.#rockPaperScissors();

        if (input == "Rock") {
            document.getElementById("you-chose").innerText = "You chose Rock.";
            if (chosen == "Rock") {
                this.#draw();
            } 
            else if (chosen == "Paper") {
                this.#lose();
            } 
            else if (chosen == "Scissors") {
                this.#win();
            }
        }
        else if (input == "Paper") {
            document.getElementById("you-chose").innerText = "You chose Paper.";
            if (chosen == "Rock") {
                this.#win();
            } 
            else if (chosen == "Paper") {
                this.#draw();
            } 
            else if (chosen == "Scissors") {
                this.#lose();
            }
        } 
        else if (input == "Scissors") {
            document.getElementById("you-chose").innerText = "You chose Scissors.";
            if (chosen == "Rock") {
                this.#lose();
            } 
            else if (chosen == "Paper") {
                this.#win();
            } 
            else if (chosen == "Scissors") {
                this.#draw();
            }
        } 
    }
}
