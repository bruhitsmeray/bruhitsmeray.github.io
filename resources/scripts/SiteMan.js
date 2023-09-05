window.onload = assignBoxClass();

for(const box of document.querySelectorAll('.box')){
    box.onclick = () => {
        if(box.hasAttribute('href')){
            window.open(box.getAttribute("href"));
        }
    }
}

function assignBoxClass() {
    for(const box of document.querySelectorAll('.box')){
        if(box.hasAttribute('href')){
            box.classList.add('highlight');
        }
    }
}