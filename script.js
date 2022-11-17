const cellElements = document.querySelectorAll('[data-cell]')

let isCircleTurn;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);

}

const handleClick = () => {
    //colocar a marca X ou circulo
    const cell = e.target;
    const classToAdd = isCircleturn ? 'circle' : 'x';
    placeMark(cell, classToAdd)
        //verificar por vitória
        // verficar por empate
        //mudar simbolo

}

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true })
}