var pageElements, openMenuIcon, closeMenuIcon, menuBlackout;
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
    menuBlackout = document.getElementById("menu-blackout");
}

function menuClicked() {
    if (menuOpen) {
        closeMenu(currentPage);
    } else {
        if (screen.availWidth < 800) window.scroll({ top: 0, left: 0, behavior: "smooth" });
        openMenu(currentPage);
    }
}

function menuItemClicked(menuItem) {
    const previousPage = currentPage;
    currentPage = menuItem;
    closeMenu(menuItem, previousPage);
}

function changePage(newPage) {
    pageElements[newPage].style.display = "flex";
    pageElements[currentPage].style.display = "none";
    currentPage = newPage;
    closeMenu(newPage);
}

function closeMenu(newPage, previousPage) {
    if (screen.availWidth >= 800 && previousPage != null) {
        pageElements[previousPage].style.display = "none";   
    }
    pageElements[newPage].style.display = "flex";

    const afterAnimationMenu = new Promise((res) => {
        anime({
            targets: '#menu',
            translateX: screen.availWidth >= 800 ? 500 : -screen.width,
            duration: 500,
            easing: 'linear',
            complete: () => res(),
        });
    });

    const afterAnimationBlackoutMenu = new Promise((res) => {
        if (screen.availWidth >= 800) {
            anime({
                targets: '#menu-blackout',
                opacity: [0.5, 0],
                duration: 500,
                easing: 'linear',
                complete: () => res(),
            });
        } else {
            res();
        }
    });

    Promise.all([afterAnimationMenu, afterAnimationBlackoutMenu]).then(() => {
        menuBlackout.style.display = "none";
        pageElements.menu.style.display = "none";
        openMenuIcon.style.display = "block";
        closeMenuIcon.style.display = "none";
        menuOpen = false;
    });
}

function openMenu(previousPage) {
    pageElements.menu.style.display = "flex";

    const afterAnimationMenu = new Promise((res) => {
        anime({
            targets: '#menu',
            translateX: screen.availWidth >= 800 ? -500 : screen.width,
            duration: 500,
            easing: 'linear',
            complete: () => res(),
        });
    });

    const afterAnimationBlackoutMenu = new Promise((res) => {
        if (screen.availWidth >= 800) {
            menuBlackout.style.display = "block";
            anime({
                targets: '#menu-blackout',
                opacity: [0, 0.5],
                duration: 500,
                easing: 'linear',
                complete: () => res(),
            });
        } else {
            res();
        }
    });

    Promise.all([afterAnimationMenu, afterAnimationBlackoutMenu]).then(() => {
        if (screen.availWidth < 800) pageElements[previousPage].style.display = "none";
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
            document.getElementById("name-input").classList.remove(INVALID_FORM_CLASS);
            document.getElementById("email-input").classList.remove(INVALID_FORM_CLASS);
            document.getElementById("subject-input").classList.remove(INVALID_FORM_CLASS);
            document.getElementById("message-input").classList.remove(INVALID_FORM_CLASS);
            break;
        default:
    }
}