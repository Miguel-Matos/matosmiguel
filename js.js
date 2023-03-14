let button = document.querySelector("#btn");
let doc = document.querySelector("html");
let on = false;

button.innerHTML = "Off";

button.addEventListener("click", () => {
  if (on === false) {
    on = true;
    doc.classList.add("dark");
    button.innerHTML = "On"
  } else {
    on = false;
    doc.classList.remove("dark");
    button.innerHTML = "Off"
  }
});