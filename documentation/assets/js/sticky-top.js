// Right navbar scroll sticky 

window.onscroll = function () { myFunction() };

var header = document.getElementById("rightNavbar");
var mainContent = document.getElementById("mainRightNavbar");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        mainContent.classList.add("padding-top");
    } else {
        header.classList.remove("sticky");
        mainContent.classList.remove("padding-top");

    }
}

