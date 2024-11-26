function changeColors() {
    const lightColors = ["btn-danger", "btn-warning", "btn-success"];

    const button = document.getElementById("lights");
    
    const currentColor = lightColors.findIndex(colors => button.classList.contains(lightColors));
    button.classList.remove(lightColors[currentColor]);
    
    const nextColor = (currentColor + 1) % lightColors.length;
    button.classList.add(lightColors[nextColor]);
}

const MAX_SIZE = 10000;

setInterval(changeColors, MAX_SIZE);
