const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".mobile-menu"); // Use the class selector

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle(".mobile-menu.active"); // Toggle the 'active' class on the mobile menu
});
