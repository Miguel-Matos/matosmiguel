let button = document.querySelector("#bun");
let doc = document.querySelector("html");
let on = false;

document.getElementById("bun").src = "img/moon.svg";

button.addEventListener("click", () => {
  if (on === false) {
    on = true;
    doc.classList.add("dark");
    document.getElementById("bun").src = "img/sun.svg";
  } else {
    on = false;
    doc.classList.remove("dark");
    document.getElementById("bun").src = "img/moon.svg";
  }
});