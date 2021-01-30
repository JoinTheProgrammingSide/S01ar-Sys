const navBtn = document.querySelector("#navBtn");
const styling = document.querySelector("style");
const navClose = document.querySelector("#navClose");
const calcBtn = document.querySelector("#calculateBtn");
const fromCurrSelect = document.querySelector("#fromCurr");
const toCurrSelect = document.querySelector("#toCurr");
const fromValue = document.querySelector("#value");
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
function calculate() {
  const Url = `https://api.exchangeratesapi.io/latest?base=${fromCurrSelect.value}`;
  fetch(Url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      output.innerHTML = `${
        res["rates"][toCurrSelect.value] * fromValue.value
      }`;
    });
}
