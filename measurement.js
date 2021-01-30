const navBtn = document.querySelector("#navBtn");
const styling = document.querySelector("style");
const navClose = document.querySelector("#navClose");
const calcBtn = document.querySelector("#calculateBtn");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");
const value = document.querySelector("#value");
const output = document.querySelector("#output");

navBtn.addEventListener("click", navDisplay);
function navDisplay() {
  styling.innerHTML = "#menu { display: block; }";
}

navClose.addEventListener("click", navHide);
function navHide() {
  styling.innerHTML = "";
}

calcBtn.addEventListener("click", calculate);
function calculate() {}
