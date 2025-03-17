/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Diego Rodríguez Martín | alu0101464992
 * @since 11.03.2025
 * @description Class for circle
 */

import { Shape } from './shape-interface';

export class Circle implements Shape {
  constructor(private radius: number, private color: string = 'red') {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
    this.radius = radius;
  }

  /**
   * Get the color of the circle
   * @returns The color of the circle
   */
  public getColor(): string {
    return this.color;
  }

  /**
   * Get the area of the circle
   * @returns The area of the circle
   */
  public getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}