let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let hardButton = document.querySelector("#hardButton");
let easyButton = document.querySelector("#easyButton");

hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
});

resetButton.addEventListener("click", function(){
    //Generate new colors
    colors = generateRandomColors(numSquares);
    //Pick a new color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Color";
    messageDisplay.textContent = "";
    //change colors of squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        //compare to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    let arr = [];
    //Add num random colors to array
    for(let i = 0; i < num; i++) {
        arr.push( randomColor() );
    }
    //Return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    let r = Math.floor( Math.random() * 256 );
    //pick a "green" from 0-255
    let g = Math.floor( Math.random() * 256 );
    //pick a "blue" from 0-255
    let b = Math.floor( Math.random() * 256 );

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
