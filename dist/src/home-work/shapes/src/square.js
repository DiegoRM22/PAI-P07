"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const rectangle_1 = require("./rectangle");
class Square extends rectangle_1.Rectangle {
    sideSize;
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
exports.Square = Square;
