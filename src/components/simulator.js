let currentX = null;
let currentY = null;
let currentDirection = null;
let gridSize = null;

export const  resetSimulator = () => {
    document.getElementById('grid-container').innerHTML = '';
    document.getElementById('movementHistory').innerHTML = '';
    document.getElementById('output').innerText = 'Posición Final: ';
    currentX = null;
    currentY = null;
    currentDirection = null;
    gridSize = null;
}

