const popup = document.querySelector(".popup");
const rainbowHSL = document.querySelector(".rainbow-mode");
const shadow = document.querySelector(".shadow");
const pencil = document.querySelector(".cancel");
const container = document.querySelector(".outer-container");
const eraser = document.querySelector(".eraser");
const inner = document.createElement("div");
const rainbowRGB = document.querySelector(".rainbowrgb");
const rainbowHEX = document.querySelector(".rainbowhex");
inner.classList.add("inner-div");

let defaultSize = 4;
let defaultColor = "black";

let mode = defaultColor;
let canvasSize = defaultSize;
let elementQuantity = canvasSize ** 2;
let mouseDown = false;

//This keeps track of clicks on the entire page.
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

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
    elementQuantity = canvasSize ** 2;
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

rainbowRGB.addEventListener("click", () => {
  mode = "rainbowRGB";
});

rainbowHEX.addEventListener("click", () => {
  mode = "rainbowHEX";
});

shadow.addEventListener("click", () => {
  mode = "shadeMode";
});

function removeChildren() {
  while (container.childElementCount > 0) {
    container.removeChild(container.childNodes[0]);
  }
} //removing previous children.

function createNewElements() {
  console.log(elementQuantity);
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
      if (mouseDown) {
        if (mode === "black") {
          child.style.backgroundColor = "black";
        } else if (mode === "white") {
          child.style.backgroundColor = "white";
        } else if (mode === "rainbowHSL") {
          child.style.backgroundColor = makeRainbowHSL();
        } else if (mode === "rainbowRGB") {
          child.style.backgroundColor = makeRainbowRGB();
        } else if (mode === "rainbowHEX") {
          child.style.backgroundColor = makerainbowHEX();
        } else if (mode === "shadeMode") {
          child.style.backgroundColor = shade(child);
        }
      }
    });
  });
}

function makeRainbowHSL() {
  let H = Math.floor(Math.random() * 360) + 1;
  let S = Math.floor(Math.random() * 100) + 1;
  let L = Math.floor(Math.random() * 100) + 1;
  let A = 1;
  hslValue = `hsla(${H}, ${S}%, ${L}%, ${A})`;
  return hslValue;
}

function makeRainbowRGB() {
  let R = Math.floor(Math.random() * 255) + 1;
  let G = Math.floor(Math.random() * 255) + 1;
  let B = Math.floor(Math.random() * 100) + 1;
  let A = 1;
  rgbValue = `rgba(${R}, ${G}, ${B}, ${A})`;
  return rgbValue;
}

function makerainbowHEX() {
  let randomColorString = "#";
  const arrayOfColorFunctions = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];

    randomColorString += value;
  }
  return randomColorString;
}

(window.onload = createNewElements()), changeMode();

// "rbg(xxx, xxx, xxx);"
function shade(element) {
  let oldbgColor = element.style.backgroundColor;
  let rgbString = oldbgColor.slice(4, -1);
  let rgbArray = rgbString.split(",");
  let R = Number(rgbArray[0]);
  if (R > 25) {
    R -= 25;
  } else {
    R = 0;
  }
  let G = Number(rgbArray[1]);
  if (G > 25) {
    G -= 25;
  } else {
    G = 0;
  }
  let B = Number(rgbArray[2]);
  if (B > 25) {
    B -= 25;
  } else {
    B = 0;
  }
  let bgShade = `rgb(${R}, ${G}, ${B})`;
  console.log(bgShade);
  return bgShade;
}
