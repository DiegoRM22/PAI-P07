/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Diego Rodríguez Martín | alu0101464992
 * @since 11.03.2025
 * @description Class to draw shapes
 */

import { Shape } from './shape-interface';

export class View {
  private readonly CANVAS = document.getElementById('canvas') as HTMLCanvasElement
  private readonly CONTEXT = this.CANVAS?.getContext('2d');
  constructor() {}

  /**
   * Draw the shape
   */
  public draw(shape: Shape): void {
    switch (shape.constructor.name) {
      case 'Circle': {
        this.drawCircle(shape);
        break;
      }
      case 'Rectangle':
      case 'Square': {
        this.drawRectangle(shape);
        break;
      }
      case 'Triangle': {
        this.drawTriangle(shape);
        break;
      }
      default: {
        console.log('Shape not found');
        break;
      }
    }
  }

  /**
   * Write text in the center of the shape
   * @param text The text to write
   * @param xCoordinate The x coordinate of the shape
   * @param yCoordinate The y coordinate of the shape
   */
  private writeTextInCenter(text: string, xCoordinate: number, yCoordinate: number): void {
    if (this.CONTEXT) {
      this.CONTEXT.font = '20px Arial';
      this.CONTEXT.textAlign = 'center';
      this.CONTEXT.textBaseline = 'middle';
      this.CONTEXT.fillStyle = 'black';
      this.CONTEXT.fillText(text, xCoordinate, yCoordinate);
    }
  }

  /**
   * Draw a circle
   * @param circle The circle to draw
   */
  private drawCircle(circle: Shape): void {
    if (this.CANVAS && this.CONTEXT) {
      this.CONTEXT.beginPath();
      const X_COORDINATE = Math.floor(Math.random() * this.CANVAS.width);
      const Y_COORDINATE = Math.floor(Math.random() * this.CANVAS.height);
      this.CONTEXT.arc(X_COORDINATE, Y_COORDINATE, circle.getArea(), 0, 2 * Math.PI);
      this.CONTEXT.stroke();
      this.CONTEXT.fillStyle = circle.getColor();
      this.CONTEXT.fill();
      this.writeTextInCenter(circle.getArea().toString(), X_COORDINATE + circle.getArea() / 2, Y_COORDINATE + circle.getArea() / 2);
    }
  }

  /**
   * Draw a rectangle
   * @param rectangle The rectangle to draw
   */
  private drawRectangle(rectangle: Shape): void {
    if (this.CANVAS && this.CONTEXT) {
      this.CONTEXT.beginPath();
      const X_COORDINATE = Math.floor(Math.random() * this.CANVAS.width);
      const Y_COORDINATE = Math.floor(Math.random() * this.CANVAS.height);
      this.CONTEXT.rect(X_COORDINATE, Y_COORDINATE, rectangle.getArea(), rectangle.getArea());
      this.CONTEXT.stroke();
      this.CONTEXT.fillStyle = rectangle.getColor();
      this.CONTEXT.fill();
      this.writeTextInCenter(rectangle.getArea().toString(), X_COORDINATE + rectangle.getArea() / 2, Y_COORDINATE + rectangle.getArea() / 2);
    }
  }

  /**
   * Draw a triangle
   * @param triangle The triangle to draw
   */
  private drawTriangle(triangle: Shape): void {
    if (this.CANVAS && this.CONTEXT) {
      this.CONTEXT.beginPath();
      const X_COORDINATE = Math.floor(Math.random() * this.CANVAS.width);
      const Y_COORDINATE = Math.floor(Math.random() * this.CANVAS.height);
      this.CONTEXT.moveTo(X_COORDINATE, Y_COORDINATE);
      this.CONTEXT.lineTo(X_COORDINATE + triangle.getArea(), Y_COORDINATE);
      this.CONTEXT.lineTo(X_COORDINATE, Y_COORDINATE + triangle.getArea());
      this.CONTEXT.lineTo(X_COORDINATE, Y_COORDINATE);
      this.CONTEXT.stroke();
      this.CONTEXT.fillStyle = triangle.getColor();
      this.CONTEXT.fill();
      this.writeTextInCenter(triangle.getArea().toString(), X_COORDINATE + triangle.getArea() / 2, Y_COORDINATE + triangle.getArea() / 2);
    }
  }
}