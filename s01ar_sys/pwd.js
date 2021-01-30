const navBtn = document.querySelector("#navBtn");
const styling = document.querySelector("style");
const navClose = document.querySelector("#navClose");
const createBtn = document.querySelector("#createBtn");
const pwdName = document.querySelector("input[name='name']");
const pwdLen = document.querySelector("input[name='length']");
const pwdsDiv = document.querySelector("#pwds");

const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.!";

var newId = 0;
var pasted = "";

navBtn.addEventListener("click", navDisplay);
function navDisplay() {
  styling.innerHTML = "#menu { display: block }";
}

navClose.addEventListener("click", navHide);
function navHide() {
  styling.innerHTML = "";
}

createBtn.addEventListener("click", createPwd);
function createPwd() {
  var pwd = document.createElement("div");
  pwd.setAttribute("class", "pwd");
  pwd.setAttribute("id", `pwd${newId}`);
  pwd.innerHTML = `<h2>${pwdName.value}</h2><br><h2>${pwdGen(
    pwdLen.value
  )}</h2><button onclick="document.querySelector('#pwd${newId}').remove()">Delete</button>`;
  pwdsDiv.appendChild(pwd);
  newId++;
}

function pwdGen(len) {
  if (len == "") {
    len = 24;
  }
  var pwd = "";
  for (var i = 0, l = charset.length; i < len; i++) {
    pwd += charset.charAt(Math.round(Math.random() * l));
  }
  return pwd;
}
