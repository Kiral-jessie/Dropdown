const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links"); 
const authButton = document.querySelector(".auth-buttons"); 


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); 
hamburger.classList.toggle("active"); 
});
