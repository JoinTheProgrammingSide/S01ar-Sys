const navBtn = document.querySelector("#navBtn");
const styling = document.querySelector("style");
const navClose = document.querySelector("#navClose");
const noteCreate = document.querySelector("#noteCreate");
const notesDiv = document.querySelector("#notes");
const title = document.querySelector("input[name='title']");
const message = document.querySelector("textarea[name='message']");

var newId = 0;

navBtn.addEventListener("click", navDisplay);
function navDisplay() {
  styling.innerHTML = "#menu { display: block; }";
}

navClose.addEventListener("click", navHide);
function navHide() {
  styling.innerHTML = "";
}

noteCreate.addEventListener("click", createNote);
function createNote() {
  var note = document.createElement("div");
  note.setAttribute("class", "note");
  note.setAttribute("id", `note${newId}`);
  note.innerHTML = `<h2>${title.value}</h2><br><p>${message.value}</p><br><button onclick="document.querySelector('#note${newId}').remove()">Delete</button>`;
  notesDiv.appendChild(note);
  newId++;
}
