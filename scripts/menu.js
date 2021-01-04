const nav_button = document.querySelector(".nav-button");
const nav_links = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

nav_button.addEventListener("click", () => {
    nav_links.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
})