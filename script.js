function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open") //add or remove the class passed in as a parameter (in this case "open") to the element
    icon.classList.toggle("open")
}