"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.squareArea = exports.circleArea = void 0;

var circleArea = function circleArea(r) {
  return 3.14 * Math.pow(r, 2);
};

exports.circleArea = circleArea;

var squareArea = function squareArea(s) {
  return s * s;
};

exports.squareArea = squareArea;