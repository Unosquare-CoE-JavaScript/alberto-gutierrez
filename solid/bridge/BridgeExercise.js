class Shape {
  constructor(name, render) {
    this.render = render;
    this.name = name;
  }
  toString() {
    return `Drawing ${this.name} ${this.render.whatToRenderAs}`;
  }
}

class Square extends Shape {
  constructor(render) {
    super("square", render);
  }
}

class Triangle extends Shape {
  constructor(render) {
    //console.log(render);
    super("triangle", render);
  }
}

class VectorRenderer extends Square {
  get whatToRenderAs() {
    return "as lines";
  }
}

class RasterRenderer extends Square {
  get whatToRenderAs() {
    return "as pixels";
  }
}
console.log(new Triangle(new VectorRenderer()).toString());
