const navBtn = document.querySelector("#navBtn");
const styling = document.querySelector("style");
const navClose = document.querySelector("#navClose");
const translateBtn = document.querySelector("#translateBtn");
const fromLangSelect = document.querySelector("#fromLang");
const toLangSelect = document.querySelector("#toLang");
const fromText = document.querySelector("#text");
const output = document.querySelector("#output");

navBtn.addEventListener("click", navDisplay);
function navDisplay() {
  styling.innerHTML = "#menu { display: block; }";
}

navClose.addEventListener("click", navHide);
function navHide() {
  styling.innerHTML = "";
}

translateBtn.addEventListener("click", calculate);
function calculate() {
  const Url = `https://api.mymemory.translated.net/get?q=${fromText.value}&langpair=${fromLangSelect.value}|${toLangSelect.value}`;
  fetch(Url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      output.innerHTML = `${res["matches"][0]["translation"]}`;
    });
}
