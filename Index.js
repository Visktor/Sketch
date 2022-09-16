const outer = document.querySelector(".outer-container");
const inner = document.createElement("div");
const rainbutton = document.querySelector(".rainbow-mode");
inner.classList.add("inner-div");
const popup = document.querySelector("button");
const cancel = document.querySelector(".cancel");
const shadow = document.querySelector(".shadow");
const innerDivs = document.querySelectorAll(".inner-div");
let gridSize = 16;

for (i = 1; i <= gridSize; i++) {
  outer.appendChild(inner.cloneNode(true)); // Deep cloning here for some godforsaken reason.
}

function setRedBG() {
  this.style.backgroundColor = "red";
}

cancel.addEventListener("click", () => {
  innerDivs.forEach((innerdiv) => {
    innerdiv.addEventListener("mouseover", setRedBG);
  });
});

let children = outer.childNodes;
popup.addEventListener("click", () => {
  let total = children.length;
  let userChoice = prompt("What size will the sketch be? (max 100) - ");
  if (userChoice > 100) {
    return alert("Can't compute values over 100.");
  } else {
    for (x = 0; x < total; x++) {
      outer.removeChild(children[0]);
    } // removing all the previous children elements.
    gridSize = userChoice ** 2; // the value² that will constitute our grid squares.
    outer.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`; // The ammount of columns.
    children.forEach((innerdiv) => {
      outer.removeChild(innerdiv);
    }); // removing the previous divs.
    for (i = 1; i <= gridSize; i++) {
      outer.appendChild(inner.cloneNode(true));
    } // creating new ones.

    const innerDivs = document.querySelectorAll(".inner-div");
    innerDivs.forEach((innerdiv) => {
      innerdiv.addEventListener("mouseover", function bgRed() {
        innerdiv.style.backgroundColor = "red";
      });
    });
  } //adding eventlisteners to the new ones.
});

function createColor(element) {
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
  element.forEach((innerdiv) => {
    innerdiv.addEventListener("mouseover", () => {
      for (let x = 0; x < 6; x++) {
        let index = Math.floor(Math.random() * 15);
        let value = arrayOfColorFunctions[index];

        randomColorString += value;
      }
      console.log(randomColorString);
      innerdiv.style.backgroundColor = randomColorString;
      if (randomColorString.length >= 7) {
        randomColorString = "#";
      }
    });
  });
}

//generate random hex value:
rainbutton.addEventListener("click", () => {
  const innerDivs = document.querySelectorAll(".inner-div");
  createColor(innerDivs);
});
