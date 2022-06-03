var menuOpen = false;
var currentPage = "home";

var pageElements;

window.onload = () => {
    pageElements = {
        menu: document.getElementById("menu"),
        home: document.getElementById("home"),
    }
}



function menuClicked() {
    console.log("menuClicked", pageElements[currentPage], menuOpen);   
    if (menuOpen) {
        pageElements[currentPage].style.display = "flex";
        pageElements.menu.style.display = "none";

    } else {
        pageElements[currentPage].style.display = "none";
        pageElements.menu.style.display = "flex";

    }
    menuOpen = !menuOpen;
}