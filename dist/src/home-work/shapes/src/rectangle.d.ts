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
import { Shape } from './shape-interface';
export declare class Rectangle implements Shape {
    private width;
    private height;
    protected color: string;
    constructor(width: number, height: number, color?: string);
    /**
     * Get the color of the circle
     * @returns The color of the circle
     */
    getColor(): string;
    /**
     * Get the area of the rectangle
     * @returns The area of the rectangle
     */
    getArea(): number;
}
