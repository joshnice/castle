var goTopElement = document.getElementById("go-top");

document.addEventListener("scroll", () => {
    var topOfPage = window.pageYOffset === 0;
    if (topOfPage) {
        goTopElement.style.display = "none";
    } else {
        goTopElement.style.display = "flex";
    }
});

function goToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}