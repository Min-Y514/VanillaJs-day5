const h2 = document.createElement("h2");
h2.innerText = "Hello!";
document.body.appendChild(h2);

function changeBackgroundColor() {
  const width = window.innerWidth;
  if (width < 400) {
    document.body.style.backgroundColor = "#2E8CD5";
  } else if (400 <= width && width < 650) {
    document.body.style.backgroundColor = "#904EAD";
  } else {
    document.body.style.backgroundColor = "#EEBC12";
  }
}

window.addEventListener("resize", changeBackgroundColor);

changeBackgroundColor();
