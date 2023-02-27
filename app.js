let hamburger = document.querySelector(".hamburger-img");
let mobileMenu = document.querySelector(".mobile-menu");
let close = document.querySelector(".x-logo");
let background = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0%)";
  background.style.display = "block";
});

close.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(100%)";
  background.style.display = "none";
});
