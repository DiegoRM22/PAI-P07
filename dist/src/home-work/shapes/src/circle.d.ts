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
export declare class Circle implements Shape {
    private radius;
    private color;
    constructor(radius: number, color?: string);
    /**
     * Get the color of the circle
     * @returns The color of the circle
     */
    getColor(): string;
    /**
     * Get the area of the circle
     * @returns The area of the circle
     */
    getArea(): number;
}
