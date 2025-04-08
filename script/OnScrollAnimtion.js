var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "-70px";
    document.getElementById("main-nav-container").classList.remove("fade-out-up");
    document.getElementById("main-nav-container").classList.add("fade-in-down");
  } else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("main-nav-container").classList.remove("fade-in-down");
    document.getElementById("main-nav-container").classList.add("fade-out-up");
  }
  prevScrollpos = currentScrollPos;
}



document.addEventListener("DOMContentLoaded", function () {
  let currentPath = window.location.pathname.toLowerCase(); // Get current page path in lowercase
  let navLinks = document.querySelectorAll("section a"); 
  navLinks.forEach(link => {
      let linkPath = link.getAttribute("href").toLowerCase(); 

    
      if (currentPath.endsWith("/") && linkPath === "/index.html") {
          link.classList.add("active");
      } 
      else if (currentPath === linkPath) {
          link.classList.add("active");
      }

      else if (currentPath.startsWith("/pages/rooms-sub-pages/") && linkPath === "/pages/rooms.html") {
        link.classList.add("active");
    }
    else if (currentPath.startsWith("/pages/promos-sub-pages/") && linkPath === "/pages/promo.html") {
      link.classList.add("active");
  }
  });
});