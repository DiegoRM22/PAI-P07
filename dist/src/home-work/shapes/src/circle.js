"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    radius;
    color;
    constructor(radius, color = 'red') {
        this.radius = radius;
        this.color = color;
        this.radius = radius;
    }
    /**
     * Get the color of the circle
     * @returns The color of the circle
     */
    getColor() {
        return this.color;
    }
    /**
     * Get the area of the circle
     * @returns The area of the circle
     */
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
exports.Circle = Circle;
