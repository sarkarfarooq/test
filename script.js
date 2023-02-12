let parentbox = document.querySelector(".container");
let leftBox = document.getElementById("div1");
let rightBox = document.getElementById("div2");

function addLeftElement() {
  let newElement = document.createElement("h3");
  let getValue = document.getElementById("txt").value;
  newElement.append(getValue);
  leftBox.appendChild(newElement);
}

function addRightElement() {
  let newElement = document.createElement("h3");
  let getValue = document.getElementById("txt").value;
  newElement.append(getValue);
  rightBox.appendChild(newElement).style.color = "red";
}

function removeLeftElement() {
  let removeElement = leftBox.childNodes;
  removeElement[0].remove();
}

function removeRightElement() {
  let removeElement = rightBox.childNodes;
  removeElement[removeElement.length - 1].remove();
}

function reset() {
  let reset = document.querySelectorAll("h3");
  for (let i = 0; i < reset.length; i++) {
    reset[i].remove();
  }
}
