var pageElements, openMenuIcon, closeMenuIcon;
var menuOpen = false;
var currentPage = "home";

window.onload = () => {
    pageElements = {
        menu: document.getElementById("menu"),
        home: document.getElementById("home"),
        recentProjects: document.getElementById("recent-projects"),
        certification: document.getElementById("certification"),
        customerTestimonials: document.getElementById("customer-testimonials"),
        socialMedia: document.getElementById("social-media"),
        contactInformation: document.getElementById("contact-information"),
        services: document.getElementById("services"),

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

function menuItemClicked (menuItem) {
    console.log(currentPage, menuItem);
    pageElements.menu.style.display = "none";
    pageElements[menuItem].style.display = "flex";
    currentPage = menuItem;
    closeMenuIcon.style.display = "none";
    openMenuIcon.style.display = "block";
    menuOpen = false;
}