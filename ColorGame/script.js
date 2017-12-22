var colours = generateRandomColours(6);

var pickedColour = pickColour();
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var message = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var number = 6;
colourDisplay.textContent = pickedColour;

hardButton.addEventListener("click", function() {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  number = 6;
  reseter();
});

easyButton.addEventListener("click", function() {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  number = 3;
  reseter();
    for (var i = 3; i< 6; i++) {
      squares[i].style.background = "#232323"
    }

});

resetButton.addEventListener("click", reseter);

for (var i = 0; i< squares.length; i++) {
  squares[i].style.background = colours[i];

  squares[i].addEventListener("click", function() {
    var clickedColour = this.style.background;

    if (clickedColour===pickedColour){
      message.textContent ="Correct";
      changeColours(clickedColour);
      resetButton.textContent = "Play Again";
    }
    else {this.style.background = "#232323";
      message.textContent = "Try Again";
    }
  });
}

function changeColours(colour) {
  for (var i = 0; i< number; i++) {
    squares[i].style.background = colour;
    document.querySelector("h1").style.backgroundColor = colour;
  }
}

function pickColour() {
  var random = Math.floor(Math.random()*colours.length);
  return colours[random];
}

function generateRandomColours(num) {
  var arr = [];
  for (var i = 0; i< num; i++) {
    arr.push(randomColour());
  }
  return arr;
}
 function randomColour() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
 }

 function reseter() {
   colours = generateRandomColours(number);
   for (var i = 0; i< squares.length; i++) {
   squares[i].style.background = colours[i];}
   pickedColour = pickColour();
   message.textContent ="";
   colourDisplay.textContent = pickedColour;
   document.querySelector("h1").style.backgroundColor = "purple";
   resetButton.textContent = "New Colours";
 }
