function Tree() {
  let root = null;
  var Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
  this.getRoot = function () {
    return root;
  };
  function insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left != null) {
        insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else if (newNode.value > node.value) {
      if (node.right != null) {
        insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }
  this.insert = function (value) {
    let newNode = new Node(value);
    if (!root) {
      root = newNode;
    }
    insertNode(root, newNode);
  };
  this.search = function (value, node = root) {
    if (!node) {
      return false;
    }
    if (value < node.value) {
      return this.search(value, node.left);
    } else if (value > node.value) {
      return this.search(value, node.right);
    } else {
      return true;
    }
  };
  this.delete = function (data, node = root) {
    if (node === null) {
      return null;
    } else if (data < node.value) {
      node.left = this.delete(data, node.left);
      return node;
    } else if (data > node.value) {
      node.right = this.delete(data, node.right);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      let aux = this.min(node.right);
      node.value = aux.value;
      node.right = this.delete(aux.value, node.right);
      return node;
    }
  };
  this.min = function (current = root) {
    if (!current) return undefined;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  };
  this.max = function () {
    if (!root) return undefined;
    let current = root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  };
  function travelNode(node, result, type) {
    if (node) {
      // 前序
      if (type == 'f') {
        result.push(node.value);
      }
      travelNode(node.left, result, type);
      // 中序
      if (type == 'm') {
        result.push(node.value);
      }
      travelNode(node.right, result, type);
      // 後序
      if (type == 'b') {
        result.push(node.value);
      }
    }
  }
  this.travel = function (type = 'f') {
    // f: 前序, m: 中序, b: 後序
    let result = [];
    travelNode(root, result, type);
    return result;
  };
}

let t = new Tree();
t.insert(7);
t.insert(17);
t.insert(1);
t.insert(4);
t.insert(23);
console.log(t.getRoot());
console.log(t.travel());
console.log(t.travel('b'));
console.log(t.travel('m'));
console.log(t.search(6));
console.log(t.search(17));
console.log(t.min());
console.log(t.max());
t.delete(17);
t.delete(1);
console.log(t.getRoot());
