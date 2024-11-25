function changeColors() {
    const light_colors = ["btn-danger", "btn-warning", "btn-success"];

    let button = document.getElementById("lights");
    
    let currentColor = colors.findIndex(colors => button.classList.contains(colors));
    button.classList.remove(colors[currentColor]);
    
    let nextColor = (currentColor + 1) % colors.length;
    button.classList.add(colors[nextColor]);
}
setInterval(changeColors, 10000);

