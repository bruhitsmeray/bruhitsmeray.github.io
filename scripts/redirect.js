for(const box of document.querySelectorAll('.content-box.video-box')){
    box.onclick = () => {
        window.open(box.getAttribute("href"));
    }
}