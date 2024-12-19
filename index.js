const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links"); 
const authButton = document.querySelector(".auth-button"); 


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); 
authButton.classList.toggle("active"); 
});
