const elements = document.querySelectorAll(".light__color");
console.log(elements);

function clickHandler() {
  elements.classList.add(".red");

  console.log(elements.classList);
}

// function clickHandler() {
//   if (elements[0].classList.contains("red")) {
//     elements[0].classList.add("red");
//     elements[1].classList.remove("yellow");
//     elements[2].classList.remove("green");
//   }
//   if (elements[1].classList.contains("yellow")) {
//     elements[0].classList.remove("red");
//     elements[1].classList.add("yellow");
//     elements[2].classList.remove(".green");
//   }
//   if (elements[2].classList.contains("green")) {
//     elements[0].classList.remove("red");
//     elements[1].classList.remove("yellow");
//     elements[2].classList.add("green");
//   }
// }

for (let element of elements) {
  element.onclick = clickHandler;
}
