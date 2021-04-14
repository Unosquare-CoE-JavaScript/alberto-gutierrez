class Node {
  constructor(value, left = null, right = null) {
    // todo
    this.value = value;
    this.left = left;
    this.right = right;

    this.parent = null;
  }

  preorder() {
    let values = [this.value];
    if (this.left) values = [...values, ...this.left.preorder()];
    if (this.right) values = [...values, ...this.right.preorder()];
    return values;
  }
}

let n = new Node(1, new Node(2), new Node(3));
console.log(n.preorder);
