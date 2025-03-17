"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
class Triangle {
    base;
    height;
    color;
    constructor(base, height, color = 'green') {
        this.base = base;
        this.height = height;
        this.color = color;
        this.base = base;
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
     * Get the area of the triangle
     * @returns The area of the triangle
     */
    getArea() {
        return this.base * this.height / 2;
    }
}
exports.Triangle = Triangle;
