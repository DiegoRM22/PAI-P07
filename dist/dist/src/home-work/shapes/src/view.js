"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
class View {
    CANVAS;
    CONTEXT;
    constructor(CANVAS = document.getElementById('canvas'), CONTEXT = this.CANVAS.getContext('2d')) {
        this.CANVAS = CANVAS;
        this.CONTEXT = CONTEXT;
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
        }
    }
}
exports.View = View;
