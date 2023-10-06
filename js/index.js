function styleButton(event) {
    const button = event.target;
    const color = button.textContent.toLowerCase();
    
    switch (color) {
        case "red":
            button.style.backgroundColor = "red";
            break;
        case "blue":
            button.style.backgroundColor = "blue";
            break;
        case "yellow":
            button.style.backgroundColor = "yellow";
            break;
        default:
            button.style.backgroundColor = "gray"; // Default color
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".styledButton");
    buttons.forEach(function (button) {
        button.addEventListener("click", styleButton);
    });
});