for(const box of document.querySelectorAll('.box')){
    box.onclick = () => {
        if(box.hasAttribute('href')){
            window.open(box.getAttribute("href"));
        }
    }
}