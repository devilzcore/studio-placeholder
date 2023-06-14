var navbar = document.getElementById("navbar");
var scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 100) {
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
