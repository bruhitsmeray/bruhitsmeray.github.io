const nav_button = document.querySelector(".nav-button");
const nav_links = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

nav_button.addEventListener("click", () => {
    nav_links.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
});

$('#navbar a, #about a , .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 80
            }, 800);
    }
});