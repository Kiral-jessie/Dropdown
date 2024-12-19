const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links"); // Use the class selector

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle the 'active' class on the mobile menu
});
