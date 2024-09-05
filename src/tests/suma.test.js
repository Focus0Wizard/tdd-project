import suma from "../components/suma";

describe('Command Execution Tests', () => {
    test('suma de 10 y 5 es 15', () => {
        const a = 10, b = 5;
        const expectedOutput = 15;
        console.log(suma(a,b))
        expect(suma(a, b)).toEqual(expectedOutput);
    });
});

