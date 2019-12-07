function drawBoard(size) {
    const container = document.querySelector('#main-container');
    container.setAttribute('style','grid-template: repeat('+size+',1fr) / repeat('+size+',1fr);')

    for (let i = 1; i <=size; i++){
        for (let j = 1; j <= size; j++){
            let tempElement = document.createElement('div');
            tempElement.classList.add('x'+j+'y'+i);
            tempElement.addEventListener("mouseover", changeColor);
            tempElement.classList.add("grid-item");
            container.appendChild(tempElement);
        }
    }
}

function promptandReset(){
    var input = prompt("Enter how large you would like the board reset to");
    const container = document.querySelector('#main-container');
    

    var integer = parseInt(input, 10);

    document.querySelectorAll('.grid-item').forEach(e => e.remove());

    if(integer != null){
        container.setAttribute('style','grid-template: repeat('+integer+',1fr) / repeat('+integer+',1fr);')

        drawBoard(integer);
    }
}

function changeColor() {
    this.style.backgroundColor = "red";
    return false;
}