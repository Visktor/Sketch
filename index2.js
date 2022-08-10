const popup = document.querySelector(".popup");
const rainbowHSL = document.querySelector(".rainbow-mode");
const shadow = document.querySelector(".shadow");
const pencil = document.querySelector(".cancel");
const container = document.querySelector(".outer-container");
const eraser = document.querySelector(".eraser");
const inner = document.createElement("div");
inner.classList.add("inner-div");

let defaultSize = 4;
let defaultColor = "black";

let mode = defaultColor;
let canvasSize = defaultSize;
let elementQuantity = canvasSize ** 2;

popup.addEventListener("click", () => {
  let userSizeChoice = prompt("Choose Canvas Size - ");
  if (Number(userSizeChoice) <= 0) {
    alert("Must be a valid number between 1 and 100.");
  }

  if (Number(userSizeChoice) > 100) {
    alert("Number can't be over 100. Try Again.");
  }

  if (Number(userSizeChoice)) {
    canvasSize = userSizeChoice;
    removeChildren();
    createNewElements();
  } else {
    alert("Must be a valid number between 1 and 100.");
  }
});

pencil.addEventListener("click", () => {
  mode = defaultColor;
  changeMode();
});

eraser.addEventListener("click", () => {
  mode = "white";
  changeMode();
});

rainbowHSL.addEventListener("click", () => {
  mode = "rainbowHSL";
  changeMode();
});

function removeChildren() {
  let children = container.childNodes;
  children.forEach((child) => {
    container.removeChild(child); //removing previous children.
  });
}

function createNewElements() {
  for (x = 0; x < elementQuantity; x++) {
    container.appendChild(inner.cloneNode(true));
  }
  container.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
}

function changeMode() {
  console.log(mode);
  let children = container.childNodes;
  children.forEach((child) => {
    child.addEventListener("mouseover", () => {
      if (mode === "black") {
        child.style.backgroundColor = "black";
      } else if (mode === "white") {
        child.style.backgroundColor = "white";
      } else if (mode === "rainbowHSL") {
        child.style.backgroundColor = makeRainbowHSL();
      }
    });
  });
}

function makeRainbowHSL() {
  let H = Math.floor(Math.random() * 360) + 1;
  let S = Math.floor(Math.random() * 100) + 1;
  let L =
   Math.floor(Math.random() * 100) + 1;
  let A = 1;
  hslValue = `hsla(${H}, ${S}%, ${L}%, ${A})`;
  return hslValue;
}

(window.onload = createNewElements()), changeMode();
