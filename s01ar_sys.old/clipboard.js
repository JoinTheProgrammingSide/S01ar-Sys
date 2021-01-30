const navBtn = document.querySelector("#navBtn");
const styling = document.querySelector("style");
const navClose = document.querySelector("#navClose");
const pasteBtn = document.querySelector("#pasteBtn");
const clipsDiv = document.querySelector("#clips");

var newId = 0;
var pasted = "";

navBtn.addEventListener("click", navDisplay);
function navDisplay() {
  styling.innerHTML = "#menu { display: block; }";
}

navClose.addEventListener("click", navHide);
function navHide() {
  styling.innerHTML = "";
}

pasteBtn.addEventListener("click", createClip);
function createClip() {
  var clip = document.createElement("div");
  clip.setAttribute("class", "clip");
  clip.setAttribute("id", `clip${newId}`);
  navigator.clipboard.readText().then((text) => {
    pasted = text;
  });
  if (pasted === "") {
    return;
  }
  clip.innerHTML = `<p>${pasted}</p><br><button id="copyBtn" onclick="navigator.clipboard.writeText(document.querySelector('#clip${newId}').querySelector('p').innerHTML)">Copy</button><button onclick="document.querySelector('#clip${newId}').remove()">Delete</button>`;
  clipsDiv.appendChild(clip);
  newId++;
}
