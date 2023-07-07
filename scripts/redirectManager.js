for(const box of document.querySelectorAll('.video-box')){
    box.onclick = () => {
        window.open(box.getAttribute("href"));
    }
}