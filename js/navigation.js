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
        contactInformation: document.getElementById("contact-information"),
        services: document.getElementById("services"),
        survey: document.getElementById("survey"),
    }
    openMenuIcon = document.getElementById("open-menu-icon");
    closeMenuIcon = document.getElementById("close-menu-icon");
    initCheckScreenSize();
}

function initCheckScreenSize() {
    const { width } = screen;
    if (width >= 700) {
        pageElements.home.style.display = "flex";
        pageElements.recentProjects.style.display = "flex";
        pageElements.certification.style.display = "flex";
        pageElements.customerTestimonials.style.display = "flex";
        pageElements.contactInformation.style.display = "flex";
        pageElements.services.style.display = "flex";
        pageElements.survey.style.display = "flex";
    }
}

function menuClicked() {
    if (menuOpen) {
        closeMenu(currentPage);
    } else {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
        openMenu(currentPage);
    }
}

function menuItemClicked(menuItem) {
    currentPage = menuItem;
    closeMenu(menuItem);
}

function changePage(newPage) {
    pageElements[newPage].style.display = "flex";
    pageElements[currentPage].style.display = "none";
    currentPage = newPage;
    closeMenu(newPage);
}

function closeMenu(newPage) {
    pageElements[newPage].style.display = "flex";

    const afterAnimation = new Promise((res) => {
        anime({
            targets: '#menu',
            translateX: -screen.width,
            duration: 500,
            easing: 'linear',
            complete: () => res(),
        });
    });

    afterAnimation.then(() => {
        pageElements.menu.style.display = "none";
        openMenuIcon.style.display = "block";
        closeMenuIcon.style.display = "none";
        menuOpen = false;
    });
}

function openMenu(previousPage) {

    pageElements.menu.style.display = "flex";

    const afterAnimation = new Promise((res) => {
        anime({
            targets: '#menu',
            translateX: screen.width,
            duration: 500,
            easing: 'linear',
            complete: () => res(),
        });
    });

    afterAnimation.then(() => {
        pageElements[previousPage].style.display = "none";
        leftPageHandler(previousPage);
        openMenuIcon.style.display = "none";
        closeMenuIcon.style.display = "block";
        menuOpen = true;
    });
}   

function newTab(url) {
    window.open(url);
}

function leftPageHandler(page) {
    switch (page) {
        case "contactInformation":
            document.getElementById("name-input").value = "";
            document.getElementById("email-input").value = "";
            document.getElementById("subject-input").value = "";
            document.getElementById("message-input").value = "";
            break;
        default:
    }
}