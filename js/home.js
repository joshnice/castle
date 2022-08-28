function principleClicked(textName) {
    if (screen.width >= 800) {
        return;
    }

    var principleText = document.getElementById(textName);
    var displayValue = window.getComputedStyle(principleText, null).display;

    if (displayValue === "none") {
        principleText.style.display = "block";
        anime({
            targets: `#${textName}`,
            duration: 500,
            opacity: [0, 1],
            easing: 'linear',
        });
    } else {
        anime({
            targets: `#${textName}`,
            duration: 500,
            opacity: [1, 0],
            easing: 'linear',
            complete: () => principleText.style.display = "none",
        });
    }
}
