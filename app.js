let hamburger = document.querySelector(".hamburger-img");
let mobileMenu = document.querySelector(".mobile-menu");
let close = document.querySelector(".x-logo");

hamburger.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0%)";
});

close.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(100%)";
});
