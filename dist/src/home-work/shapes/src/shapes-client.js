"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomColor = randomColor;
exports.randomShape = randomShape;
exports.main = main;
const triangle_1 = require("./triangle");
const square_1 = require("./square");
const rectangle_1 = require("./rectangle");
const circle_1 = require("./circle");
const view_1 = require("./view");
function randomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange',
        'pink', 'brown', 'gray', 'cyan', 'magenta', 'olive', 'lime', 'navy', 'teal', 'maroon'];
    return colors[Math.floor(Math.random() * colors.length)];
}
function randomShape() {
    const randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            return new circle_1.Circle(Math.random() * 10, randomColor());
        case 1:
            return new rectangle_1.Rectangle(Math.random() * 10, Math.random() * 10, randomColor());
        case 2:
            return new square_1.Square(Math.random() * 10, randomColor());
        case 3:
            return new triangle_1.Triangle(Math.random() * 10, Math.random() * 10, randomColor());
        default:
            throw new Error('Invalid shape');
    }
}
function main() {
    console.log('Welcome to the shapes client');
    const numberOfShapes = parseInt(prompt('Enter the number of shapes to draw: '), 10);
    const shapes = [];
    for (let i = 0; i < numberOfShapes; i++) {
        shapes.push(randomShape());
    }
    const view = new view_1.View();
    shapes.forEach((shape) => {
        view.draw(shape);
    });
}
window.onload = () => {
    main();
};
