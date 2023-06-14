// navbar background transition
var navbar = document.getElementById("navbar");
var scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 50) {
        if (!scrolled) {
            navbar.classList.add("navbar-scrolled");
            scrolled = true;
        }
    } else {
        if (scrolled) {
            navbar.classList.remove("navbar-scrolled");
            scrolled = false;
        }
    }
};

// smooth scroll
$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
  
      var target = $(this).attr('href');
      var offset = $(target).offset().top;
  
      $('html, body').animate({ scrollTop: offset }, 'slow');
    });
  });
  
  AOS.init();
