const goTopElement = document.getElementById("go-top");
const scrollContent = document.getElementById("content");

scrollContent.addEventListener("scroll", () => {
    var topOfPage = scrollContent.scrollTop === 0;
    if (topOfPage) {
        goTopElement.style.display = "none";
    } else {
        goTopElement.style.display = "flex";
    }
});

function goToTop() {
    scrollContent.scroll({ top: 0, left: 0, behavior: 'smooth' });
}