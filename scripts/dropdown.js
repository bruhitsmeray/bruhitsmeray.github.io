document.querySelectorAll('.accordion_btn').forEach(button => {
    button.addEventListener('click', () => {
        const navlinks = button.nextElementSibling;

        button.classList.toggle('accordion_btn--active');

        if(button.classList.contains('accordion_btn--active')) {
            navlinks.style.maxHeight = navlinks.scrollHeight + 'px';
        } else {
            navlinks.style.maxHeight = 0;
        }
    });
});