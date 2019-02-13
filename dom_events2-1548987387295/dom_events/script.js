function greetings() {
  console.log(2 + 2);
}

var signInBtn = document.getElementById("sign-in");
var colorsSelect = document.getElementById("colors");
var updateButton = document.getElementById("color-update");

signInBtn.addEventListener("click", clickCallback);

document.addEventListener("click", function() {
  console.log("stop poking me!");
});

var searchBox = document.getElementById("search");
searchBox.addEventListener("keyup", function(event) {
  console.log(event);
  event.target.value += "I SEE YOU";
});

var colors = ["green", "blue", "yellow", "red"];

for (var i = 0; i < colors.length; i++) {
  addColorOption(colors[i]);
}

updateButton.addEventListener("click", function() {
  var currColor = colorsSelect.value;
  document.body.style.backgroundColor = currColor;
});

function clickCallback(event) {
  var newElement = document.createElement("div");
  newElement.innerText = "hi";
  document.body.appendChild(newElement);
  event.stopPropagation();
}

function addColorOption(color) {
  var newOption = document.createElement("option");
  newOption.value = color;
  newOption.innerText = color;
  colorsSelect.appendChild(newOption);
}
