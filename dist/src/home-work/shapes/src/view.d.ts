/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Diego Rodríguez Martín | alu0101464992
 * @since 11.03.2025
 * @description Class to draw shapes
 */
import { Shape } from './shape-interface';
export declare class View {
    private readonly CANVAS;
    private readonly CONTEXT;
    constructor(CANVAS?: HTMLCanvasElement, CONTEXT?: CanvasRenderingContext2D);
    /**
     * Draw the shape
     */
    draw(shape: Shape): void;
    /**
     * Draw a circle
     * @param circle The circle to draw
     */
    private drawCircle;
    /**
     * Draw a rectangle
     * @param rectangle The rectangle to draw
     */
    private drawRectangle;
    /**
     * Draw a triangle
     * @param triangle The triangle to draw
     */
    private drawTriangle;
}
