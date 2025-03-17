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
export class Rectangle {
    constructor(width, height, color = 'blue') {
        this.width = width;
        this.height = height;
        this.color = color;
        this.width = width;
        this.height = height;
    }
    /**
     * Get the color of the circle
     * @returns The color of the circle
     */
    getColor() {
        return this.color;
    }
    /**
     * Get the area of the rectangle
     * @returns The area of the rectangle
     */
    getArea() {
        return this.width * this.height;
    }
}
