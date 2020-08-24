const elements = document.querySelectorAll(".light__color");

function clickHandler() {
  for (let element of elements) {
    element.classList.remove("active");
  }
  this.classList.add("active");
}

for (let element of elements) {
  element.onclick = clickHandler;
}
