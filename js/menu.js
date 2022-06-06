var menuOpen = false;
var currentPage = "home";

var pageElements;

var openMenuIcon, closeMenuIcon;

window.onload = () => {
    pageElements = {
        menu: document.getElementById("menu"),
        home: document.getElementById("home"),
    }
    openMenuIcon = document.getElementById("open-menu-icon");
    closeMenuIcon = document.getElementById("close-menu-icon");
}

function menuClicked() {
    if (menuOpen) {
        pageElements[currentPage].style.display = "flex";
        pageElements.menu.style.display = "none";
        openMenuIcon.style.display = "block";
        closeMenuIcon.style.display = "none";
    } else {
        pageElements[currentPage].style.display = "none";
        pageElements.menu.style.display = "flex";
        openMenuIcon.style.display = "none";
        closeMenuIcon.style.display = "block";
    }
    menuOpen = !menuOpen;
}