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

