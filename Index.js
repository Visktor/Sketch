const outer = document.querySelector(".outer-container");
const inner = document.createElement("div");
inner.classList.add("inner-div");

const popup = document.querySelector("button");
let placeholderValue = 16;
for (i = 1; i <= placeholderValue; i++) {
  outer.appendChild(inner.cloneNode(true));
}

const innerall = document.querySelectorAll(".inner-div");
innerall.forEach((innerdiv) => {
  innerdiv.addEventListener("mouseover", () => innerdiv.classList.add("red"));
});

popup.addEventListener("click", () => {
  let children = outer.childNodes;
  let total = children.length;
  for (x = 0; x < total; x++) {
    outer.removeChild(children[0]);
  } // removing all the previous children elements.
  let userChoice = prompt("What size will the sketch be? (max 100) - ");
  if (userChoice > 100) {
    return alert("Can't compute values over 100.");
  } else {
    placeholderValue = userChoice ** 2; // the value² that will constitute our grid squares.
    outer.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`; // The ammount of columns.
    children.forEach((innerdiv) => {
      outer.removeChild(innerdiv);
    }); // removing the previous divs.
    for (i = 1; i <= placeholderValue; i++) {
      outer.appendChild(inner.cloneNode(true));
    } // creating new ones.
    const innerall = document.querySelectorAll(".inner-div");
    innerall.forEach((innerdiv) => {
      innerdiv.addEventListener("mouseover", () =>
        innerdiv.classList.add("red")
      );
    });
  } //adding eventlisteners to the new ones.
});


//generate random hex value:
function genHexValue(){
const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

let randomColorString = '#';
() => {

for (let x = 0; x < 6; x++){

    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColorFunctions[index]

    randomColorString += value
}
 return randomColorString;
}}