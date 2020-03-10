// Your code goes here

const anchor = document.querySelectorAll("a");
anchor[0].addEventListener("click", () => {
  anchor[0].style.color = "red";
});

anchor[1].addEventListener("click", () => {
  anchor[1].style.color = "green";
});

anchor[2].addEventListener("click", () => {
  anchor[2].style.color = "blue";
});

anchor[3].addEventListener("click", () => {
  anchor[3].style.color = "Chocolate";
});

anchor[0].addEventListener("contextmenu", () => {
  anchor[0].style.color = "black";
});

anchor[1].addEventListener("contextmenu", () => {
  anchor[1].style.color = "black";
});

anchor[2].addEventListener("contextmenu", () => {
  anchor[2].style.color = "black";
});

anchor[3].addEventListener("contextmenu", () => {
  anchor[3].style.color = "black";
});

window.addEventListener("resize", function() {
  alert("You Are resizing Me!");
});

const intro = document.querySelector(".intro img");
intro.addEventListener("dblclick", function() {
  intro.style.visibility = "hidden";
});

window.addEventListener("load", function(event) {
  alert("This page has now loaded");
});

const img1 = document.querySelector("#imgdom");
img1.addEventListener("mouseenter", function(event) {
  event.target.style.border = "2px dashed crimson";
});
img1.addEventListener("mouseout", function(event) {
  event.target.style.border = "0px";
});

const p = document.querySelector("p");
p.addEventListener("copy", function(event) {
  alert("Stop copying my paragraph!");
});

document.addEventListener("keydown", function() {
  window.confirm("You pressed a key!");
});

const btnfun = document.querySelector(".btn");
btnfun.addEventListener("click", function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    alert("User cancelled the prompt.");
  } else {
    alert("Hello " + person + "! Welcome to FunBus");
  }
  document.getElementById("demo").innerHTML = txt;
});

const h1s = document.querySelector("h1");
h1s.addEventListener("drag", () => {
  h1s.style.fontSize = "80px";
});
