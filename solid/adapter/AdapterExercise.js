class Square {
  constructor(side) {
    this.side = side;
  }
}

class SquareToRectangleAdapter {
  constructor(square) {
    this.square = square;
  }
  get width() {
    return this.square.side;
  }
  get height() {
    return this.square.side;
  }
}

function calculateArea(rectangle) {
  return rectangle.width * rectangle.height;
}

const square = new Square(3);
console.log(calculateArea(new SquareToRectangleAdapter(square)));
