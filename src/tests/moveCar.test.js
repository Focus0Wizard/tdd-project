import { moveCar } from "../components";

describe('Car Movement Tests', () => {
    afterEach(() => {
        document.body.innerHTML = '<div id="grid-container"></div>';
    });

    test('Debería mover el coche a la posición (1,1)', () => {
        document.body.innerHTML = `
            <div id="grid-container">
                <div id="cell-0-0" class="cell"></div>
                <div id="cell-0-1" class="cell"></div>
                <div id="cell-1-0" class="cell"></div>
                <div id="cell-1-1" class="cell"></div>
            </div>
        `;

        // Mover el coche a la posición (1, 1)
        moveCar(1, 1, 2);

        // Verificar que la celda correcta tiene la clase 'car'
        const carCell = document.getElementById('cell-0-1');
        expect(carCell.classList.contains('car')).toBe(true);
        expect(carCell.innerHTML).toBe('🏎️');

        // Verificar que ninguna otra celda tiene la clase 'car'
        const allCells = document.querySelectorAll('.cell');
        allCells.forEach(cell => {
            if (cell !== carCell) {
                expect(cell.classList.contains('car')).toBe(false);
            }
        });
    });

    test('No debería hacer nada si la celda no existe', () => {
        document.body.innerHTML = `
            <div id="grid-container">
                <div id="cell-0-0" class="cell"></div>
                <div id="cell-0-1" class="cell"></div>
                <div id="cell-1-0" class="cell"></div>
                <div id="cell-1-1" class="cell"></div>
            </div>
        `;

        // Redefinir gridContainer para que esté disponible en la prueba
        const gridContainer = document.getElementById('grid-container');

        // Intentar mover el coche a una celda inexistente
        moveCar(3, 3, 2);

        // Verificar que no se ha añadido la clase "car" a ninguna celda
        const carCells = gridContainer.querySelectorAll('.car');
        expect(carCells.length).toBe(0);
    });
});
