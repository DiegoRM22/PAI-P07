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
export declare class Triangle implements Shape {
    private base;
    private height;
    private color;
    constructor(base: number, height: number, color?: string);
    /**
     * Get the color of the circle
     * @returns The color of the circle
     */
    getColor(): string;
    /**
     * Get the area of the triangle
     * @returns The area of the triangle
     */
    getArea(): number;
}
