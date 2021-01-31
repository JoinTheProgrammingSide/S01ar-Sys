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

calcBtn.addEventListener("click", showResult);
async function showResult() {
  var outputNum = await calculate();
  output.innerHTML = outputNum;
}

function calculate() {
  var num = 0;
  var result = 0;

  // Check if conversion is needed
  if (fromUnit.value === toUnit) {
    return value.value;
    // If needed changing value to meters
  } else if (fromUnit.value === "m") {
    num = value.value;
  } else if (fromUnit.value === "mm") {
    num = value.value / 1000;
  } else if (fromUnit.value === "cm") {
    num = value.value / 100;
    console.log(value.value);
    console.log(num);
  } else if (fromUnit.value === "km") {
    num = value.value * 1000;
  } else if (fromUnit.value === "in") {
    num = value.value / 254;
  } else if (fromUnit.value === "ft") {
    num = value.value / 3.28;
  } else if (fromUnit.value === "mi") {
    num = value.value * 1609.344;
  } else {
    console.error("Invalid fromUnit"); // This should never happen
  }

  // Finding to Unit and modifying the result value accordingly
  if (toUnit.value === "mi") {
    result = num / 1609.344;
  } else if (toUnit.value === "m") {
    return num;
  } else if (toUnit.value === "mm") {
    result = num * 1000;
  } else if (toUnit.value === "cm") {
    result = num * 100;
  } else if (toUnit.value === "km") {
    result = num / 1000;
  } else if (toUnit.value === "in") {
    result = num * 39.37;
  } else if (toUnit.value === "ft") {
    result = num * 3.28;
  } else {
    console.error("Invalid toUnit"); // Again this should not happen
  }
  return result;
}
