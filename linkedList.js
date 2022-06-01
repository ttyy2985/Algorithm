function LinkedList() {
  let head = null,
    length = 0,
    current = head;
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  // 插入最尾端
  this.append = function (element) {
    const node = new Node(element);
    if (!head) {
      // 沒有節點
      head = node;
    } else {
      current = head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
  // 插入任意位置
  this.insertAt = function (position, element) {
    if (position < 0 || position > length) return;
    const node = new Node(element);
    let prev = null,
      current = head,
      index = 0;
    if (position == 0) {
      head = node;
      node.next = current;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      prev.next = node;
      node.next = current;
    }
    length++;
  };
  // 刪除任意節點
  this.removeAt = function(position) {
    if (position < 0 || position > length) return;
    let prev = null,
      current = head,
      index = 0;
    if (position == 0) {
      head = current.next;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    length--;
  };
  this.size = function () {
    return length;
  };
  this.print = function () {
    let list = [];
    current = head;
    while (current) {
      list.push(current.element);
      current = current.next;
    }
    return list;
  };
  this.get = function (position) {
    if (position < 0 || position > length) return null;
    current = head;
    let index = 0;
    while(index++ < position) {
      current = current.next
    }
    return current
  };
  this.set = function (position, element) {
    let setNode = this.get(position);
    if(!setNode) return false;
    setNode.element = element;
    return true;
  }
  this.isEmpty = function () {
    return length == 0;
  }
}

let linkList = new LinkedList();
console.log(linkList.size());
linkList.append(1);
console.log(linkList.size());
linkList.insertAt(0, 3);
linkList.insertAt(0, 2);
console.log(linkList.print());
console.log(linkList.size());
linkList.removeAt(0);
linkList.set(0, 10);
console.log(linkList.print());
console.log(linkList.get(0));
console.log(linkList.size());
