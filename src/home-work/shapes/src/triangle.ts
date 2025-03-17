/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Diego Rodríguez Martín | alu0101464992
 * @since 11.03.2025
 * @description Class for triangle
 */

import { Shape } from './shape-interface';

export class Triangle implements Shape {
  constructor(private base: number, private height: number, private color: string = 'green') {
    if (base <= 0 || height <= 0) {
      throw new Error('Base and height must be positive numbers');
    }
    this.base = base;
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
   * Get the area of the triangle
   * @returns The area of the triangle
   */
  public getArea(): number {
    return this.base * this.height / 2;
  }
}