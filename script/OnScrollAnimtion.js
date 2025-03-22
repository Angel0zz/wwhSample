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



const listItems = document.querySelectorAll('.nav-link');
const fromContainer = document.querySelector('.main-bg');

// Adding hover effect to each li
listItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
      const bgImage = item.getAttribute('data-bg');
      fromContainer.style.backgroundImage = `
        radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.1) 20%),
        url('/img-assets/${bgImage}')
      `;
  });
  item.addEventListener('mouseleave', function() {
      // Reset to default image when mouse leaves the list item
      fromContainer.style.backgroundcolor = 'radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 1) 100%),url("/img-assets/279951970.jpg")';
  });
});
