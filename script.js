function changeColors() {
    let button = document.getElementById("lights");
    const colors = ["btn-danger", "btn-warning", "btn-success"];
    
    let currentColor = colors.findIndex(colors => button.classList.contains(colors));
    button.classList.remove(colors[currentColor]);
    
    let nextColor = (currentColor + 1) % colors.length;
    button.classList.add(colors[nextColor]);
}
setInterval(changeColors, 10000);

