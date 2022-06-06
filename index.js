let navbar = document.querySelector(".navbar");
 
window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    navbar.style.top = "0px";
  }  else {
    navbar.style.top = "-80px";
  };
});