/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Diego Rodríguez Martín | alu0101464992
 * @since 11.03.2025
 * @description Extended tests for the shapes
 */

import { describe, test, expect } from '@jest/globals';
import { Circle } from '../src/circle';
import { Rectangle } from '../src/rectangle';
import { Square } from '../src/square';
import { Triangle } from '../src/triangle';

describe('Shape Calculations', () => {
  
  describe('Circle', () => {
    test('Circle area', () => {
      const circle = new Circle(5);
      expect(circle.getArea()).toBeCloseTo(78.54);
    });

    test('Circle with negative radius throws error', () => {
      expect(() => new Circle(-5)).toThrow('Radius must be a positive number');
    });
  });

  describe('Rectangle', () => {
    test('Rectangle area', () => {
      const rectangle = new Rectangle(5, 10);
      expect(rectangle.getArea()).toBeCloseTo(50);
    });

    test('Rectangle with negative dimensions throws error', () => {
      expect(() => new Rectangle(-5, 10)).toThrow('Width and height must be positive numbers');
    });
  });

  describe('Square', () => {
    test('Square area', () => {
      const square = new Square(5);
      expect(square.getArea()).toBeCloseTo(25);
    });

    test('Square with negative side length throws error', () => {
      expect(() => new Square(-5)).toThrow('Side length must be a positive number');
    });
  });

  describe('Triangle', () => {
    test('Triangle area', () => {
      const triangle = new Triangle(5, 10);
      expect(triangle.getArea()).toBeCloseTo(25);
    });

    test('Triangle with negative base or height throws error', () => {
      expect(() => new Triangle(-5, 10)).toThrow('Base and height must be positive numbers');
    });
  });

  describe('Comparative Tests', () => {
    test('Rectangle area is greater than square area with same width', () => {
      const rectangle = new Rectangle(5, 10);
      const square = new Square(5);
      expect(rectangle.getArea()).toBeGreaterThan(square.getArea());
    });

    test('Triangle area is smaller than rectangle with same base and height', () => {
      const rectangle = new Rectangle(5, 10);
      const triangle = new Triangle(5, 10);
      expect(triangle.getArea()).toBeLessThan(rectangle.getArea());
    });
  });

});
