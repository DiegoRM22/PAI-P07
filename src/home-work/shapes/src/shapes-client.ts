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

import { Triangle } from './triangle';
import { Square } from './square';
import { Rectangle } from './rectangle';
import { Circle } from './circle';
import { Shape } from './shape-interface';
import { View } from './view';

function randomColor(): string {
  const colors: string[] = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange',
    'pink', 'brown', 'gray', 'cyan', 'magenta', 'olive', 'lime', 'navy', 'teal', 'maroon'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomSize(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function randomShape(): Shape {
  const minSize = 3;  // Tamaño mínimo permitido
  const maxSize = 7; // Tamaño máximo permitido

  const randomNumber: number = Math.floor(Math.random() * 4);
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
  console.log()
  const numberOfShapes: number = parseInt(prompt('Enter the number of shapes to draw: ')!, 10);
  const shapes: Shape[] = [];
  for (let i = 0; i < numberOfShapes; i++) {
    shapes.push(randomShape());
  }
  const view = new View();
  shapes.forEach((shape: Shape) => {
    view.draw(shape);
  });
}

window.onload = () => {
  main();
};



