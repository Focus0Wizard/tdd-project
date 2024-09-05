export const moveCar = (x, y, gridSize) => {
    document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('car'));
    const adjustedY = gridSize - 1 - y; 
    const carCell = document.getElementById(`cell-${adjustedY}-${x}`);
    if (carCell) {
        carCell.classList.add('car');
        carCell.innerHTML = '🏎️';
    }
}