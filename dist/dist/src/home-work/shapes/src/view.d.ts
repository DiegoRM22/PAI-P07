export const __esModule: boolean;
export class View {
    constructor(CANVAS?: HTMLElement | null, CONTEXT?: any);
    CANVAS: HTMLElement | null;
    CONTEXT: any;
    /**
     * Draw the shape
     */
    draw(shape: any): void;
    /**
     * Draw a circle
     * @param circle The circle to draw
     */
    drawCircle(circle: any): void;
    /**
     * Draw a rectangle
     * @param rectangle The rectangle to draw
     */
    drawRectangle(rectangle: any): void;
    /**
     * Draw a triangle
     * @param triangle The triangle to draw
     */
    drawTriangle(triangle: any): void;
}
