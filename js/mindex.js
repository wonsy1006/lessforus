const nav = document.querySelector("#nav");
const hamburger = document.querySelector(".hamburger");

nav.classList.add("hidden");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});
