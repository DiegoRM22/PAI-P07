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
import { Rectangle } from './rectangle.js';
export class Square extends Rectangle {
    constructor(sideSize, color = 'black') {
        super(sideSize, sideSize);
        this.sideSize = sideSize;
        this.color = color;
    }
    /**
     * Get the area of the square
     * @returns The area of the square
     */
    getArea() {
        return super.getArea();
    }
}
