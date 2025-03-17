/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Diego Rodríguez Martín | alu0101464992
 * @since 11.03.2025
 * @description Class for rectangle
 */

import { Shape } from './shape-interface';

export class Rectangle implements Shape {
  constructor(private width: number, private height: number, protected color: string = 'blue') {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
    this.width = width;
    this.height = height;
  }

  /**
   * Get the color of the circle
   * @returns The color of the circle
   */
  public getColor(): string {
    return this.color;
  }

  /**
   * Get the area of the rectangle
   * @returns The area of the rectangle
   */
  public getArea(): number {
    return this.width * this.height;
  }
}