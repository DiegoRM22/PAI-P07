/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Diego Rodríguez Martín | alu0101464992
 * @since 11.03.2025
 * @description Client for shapes classes
 */
import { Triangle } from './triangle.js';
import { Square } from './square.js';
import { Rectangle } from './rectangle.js';
import { Circle } from './circle.js';
import { View } from './view.js';
function randomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange',
        'pink', 'brown', 'gray', 'cyan', 'magenta', 'olive', 'lime', 'navy', 'teal', 'maroon'];
    return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomSize(min, max) {
    return Math.random() * (max - min) + min;
}
function randomShape() {
    const minSize = 3; // Tamaño mínimo permitido
    const maxSize = 7; // Tamaño máximo permitido
    const randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            return new Circle(getRandomSize(minSize, maxSize), randomColor());
        case 1:
            return new Rectangle(getRandomSize(minSize, maxSize), getRandomSize(minSize, maxSize), randomColor());
        case 2:
            return new Square(getRandomSize(minSize, maxSize), randomColor());
        case 3:
            return new Triangle(getRandomSize(minSize, maxSize), getRandomSize(minSize, maxSize), randomColor());
        default:
            throw new Error('Invalid shape');
    }
}
export function main() {
    console.log();
    const numberOfShapes = parseInt(prompt('Enter the number of shapes to draw: '), 10);
    const shapes = [];
    for (let i = 0; i < numberOfShapes; i++) {
        shapes.push(randomShape());
    }
    const view = new View();
    shapes.forEach((shape) => {
        view.draw(shape);
    });
}
window.onload = () => {
    main();
};
