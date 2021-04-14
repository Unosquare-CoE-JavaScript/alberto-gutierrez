class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class PointFactory {
  setCartesianPoint(x, y) {
    return new Point(x, y);
  }
  static setPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}
