/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Diego Rodríguez Martín | alu0101464992
 * @since 11.03.2025
 * @description Class for square
 */

import { Rectangle } from './rectangle';

export class Square extends Rectangle {
  constructor(private sideSize: number, color: string = 'black') {
    if (sideSize <= 0) {
      throw new Error('Side length must be a positive number');
    }
    super(sideSize, sideSize);
    this.color = color;
  }

  /**
   * Get the area of the square
   * @returns The area of the square
   */
  public getArea(): number {
    return super.getArea();
  }
}