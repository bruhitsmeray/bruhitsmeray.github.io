const boxes = document.querySelectorAll('.box');

window.onload = assignBoxClass();

for(const box of boxes){
    box.onclick = () => {
        if(box.hasAttribute('href')){
            window.open(box.getAttribute("href"));
        }
    }
}

function assignBoxClass() {
    for(const box of boxes){
        if(box.hasAttribute('href')){
            box.classList.add('highlight');
        }
    }
}