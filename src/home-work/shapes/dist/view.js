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
export class View {
    constructor() {
        var _a;
        this.CANVAS = document.getElementById('canvas');
        this.CONTEXT = (_a = this.CANVAS) === null || _a === void 0 ? void 0 : _a.getContext('2d');
    }
    /**
     * Draw the shape
     */
    draw(shape) {
        switch (shape.constructor.name) {
            case 'Circle': {
                this.drawCircle(shape);
                break;
            }
            case 'Rectangle':
            case 'Square': {
                this.drawRectangle(shape);
                break;
            }
            case 'Triangle': {
                this.drawTriangle(shape);
                break;
            }
            default: {
                console.log('Shape not found');
                break;
            }
        }
    }
    /**
     * Write text in the center of the shape
     * @param text The text to write
     * @param xCoordinate The x coordinate of the shape
     * @param yCoordinate The y coordinate of the shape
     */
    writeTextInCenter(text, xCoordinate, yCoordinate) {
        if (this.CONTEXT) {
            this.CONTEXT.font = '20px Arial';
            this.CONTEXT.textAlign = 'center';
            this.CONTEXT.textBaseline = 'middle';
            this.CONTEXT.fillStyle = 'black';
            this.CONTEXT.fillText(text, xCoordinate, yCoordinate);
        }
    }
    /**
     * Draw a circle
     * @param circle The circle to draw
     */
    drawCircle(circle) {
        if (this.CANVAS && this.CONTEXT) {
            this.CONTEXT.beginPath();
            const X_COORDINATE = Math.floor(Math.random() * this.CANVAS.width);
            const Y_COORDINATE = Math.floor(Math.random() * this.CANVAS.height);
            this.CONTEXT.arc(X_COORDINATE, Y_COORDINATE, circle.getArea(), 0, 2 * Math.PI);
            this.CONTEXT.stroke();
            this.CONTEXT.fillStyle = circle.getColor();
            this.CONTEXT.fill();
            // this.writeTextInCenter(circle.getArea().toString(), X_COORDINATE + circle.getArea() / 2, Y_COORDINATE + circle.getArea() / 2);
        }
    }
    /**
     * Draw a rectangle
     * @param rectangle The rectangle to draw
     */
    drawRectangle(rectangle) {
        if (this.CANVAS && this.CONTEXT) {
            this.CONTEXT.beginPath();
            const X_COORDINATE = Math.floor(Math.random() * this.CANVAS.width);
            const Y_COORDINATE = Math.floor(Math.random() * this.CANVAS.height);
            this.CONTEXT.rect(X_COORDINATE, Y_COORDINATE, rectangle.getArea(), rectangle.getArea());
            this.CONTEXT.stroke();
            this.CONTEXT.fillStyle = rectangle.getColor();
            this.CONTEXT.fill();
            // this.writeTextInCenter(rectangle.getArea().toString(), X_COORDINATE + rectangle.getArea() / 2, Y_COORDINATE + rectangle.getArea() / 2);
        }
    }
    /**
     * Draw a triangle
     * @param triangle The triangle to draw
     */
    drawTriangle(triangle) {
        if (this.CANVAS && this.CONTEXT) {
            this.CONTEXT.beginPath();
            const X_COORDINATE = Math.floor(Math.random() * this.CANVAS.width);
            const Y_COORDINATE = Math.floor(Math.random() * this.CANVAS.height);
            this.CONTEXT.moveTo(X_COORDINATE, Y_COORDINATE);
            this.CONTEXT.lineTo(X_COORDINATE + triangle.getArea(), Y_COORDINATE);
            this.CONTEXT.lineTo(X_COORDINATE, Y_COORDINATE + triangle.getArea());
            this.CONTEXT.lineTo(X_COORDINATE, Y_COORDINATE);
            this.CONTEXT.stroke();
            this.CONTEXT.fillStyle = triangle.getColor();
            this.CONTEXT.fill();
            // this.writeTextInCenter(triangle.getArea().toString(), X_COORDINATE + triangle.getArea() / 2, Y_COORDINATE + triangle.getArea() / 2);
        }
    }
}