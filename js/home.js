function principleClicked(textName) {
    var principleText = document.getElementById(textName);
    var displayValue = window.getComputedStyle(principleText, null).display;
    principleText.style.display = displayValue === "none" ? "block" : "none";
}