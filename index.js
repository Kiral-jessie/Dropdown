const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links"); 
const authButton = document.querySelector(".auth-button"); // Use the class selector


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); 
authButton.classList.toggle("active"); 
});
