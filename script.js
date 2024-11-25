function changeColors() {
    const lightColors = ["btn-danger", "btn-warning", "btn-success"];

    let button = document.getElementById("lights");
    
    let currentColor = lightColors.findIndex(colors => button.classList.contains(lightColors));
    button.classList.remove(lightColors[currentColor]);
    
    let nextColor = (currentColor + 1) % lightColors.length;
    button.classList.add(lightColors[nextColor]);
}
setInterval(changeColors, 10000);

