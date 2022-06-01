// 但在插入的時候有衝突
function HashTable() {
  let item = [];
  // function hashFunction(key) {
  //   let index = 0;
  //   for(let i = 0 ; i< key.length ; i++) {
  //     index += key.charCodeAt(i);
  //   }
  //   return index % 37;
  // }
  function hashFunction(key) {
    const hash = 5381;
    for(let i = 0 ; i < key.length ; i++) {
      hash = hash *33 +key.charCodeAt(i);
    }
    return hash % 1013
  }
  this.clear = function () {
    item = []
  }
  this.insert = function (key, value) {
    const index = hashFunction(key);
    item[index] = value;
  }
  this.get = function (key) {
    const index = hashFunction(key);
    return item[index] ?? undefined
  }
  this.delete = function (key) {
    const index = hashFunction(key);
    if (index > -1) {
      item[index] = undefined;
      return true
    }
    return false
  }
  this.getItem = function () {
    return item;
  }
}

// let d = new HashTable();
// d.insert('name', '賽車手');
// d.insert('name', '123');
// d.insert('gender', 'male');
// console.log(d.get('name'));
// console.log(d.getItem());
// d.delete('gender');
// console.log(d.getItem());


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
  this.removeAt = function (position) {
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
    while (index++ < position) {
      current = current.next
    }
    return current
  };
  this.set = function (position, element) {
    let setNode = this.get(position);
    if (!setNode) return false;
    setNode.element = element;
    return true;
  }
  this.isEmpty = function () {
    return length == 0;
  }
}

// 分離鏈結法
function LinkedListHashTable() {
  let item = [];
  function hashFunction(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % 37;
  }
  this.clear = function () {
    item = []
  }
  this.insert = function (key, value) {
    const index = hashFunction(key);
    if(item[index]) {
      item[index].append({ key, value });
    } else {
      const linkedList = new LinkedList();
      linkedList.append({key, value});
      item[index] = linkedList;
    }
  }
  this.get = function (key) {
    const index = hashFunction(key);
    if (item[index]) {
      let current = item[index].get(0);
      while(current){
        if (current.element.key == key) {
          return current.element.value
        }
        current = current.next
      }
    } else {
      return undefined;
    }
    // return item[index] ?? undefined

  }
  this.delete = function (key) {
    const index = hashFunction(key);
    if (item[index]) {
      let current = item[index].get(0);
      let i = 0;
      while(current) {
        if (current.element.key == key) {
          item[index].removeAt(i);
          if(item[index].isEmpty()) {
            item[index] = undefined;
          }
          return true
        }
        current = current.next
        i++;
      }
      
    }
    return false
  }
  this.getItem = function () {
    return item;
  }
}

// let lh = new LinkedListHashTable();
// lh.insert('name', '賽車手');
// lh.insert('name', '123');
// lh.insert('Ana', 'male');
// lh.insert('Donnie', 'female');
// lh.insert('gender', 'next');
// console.log(lh.get('Ana'));
// console.log(lh.get('Donnie'));
// console.log(lh.delete('Donnie'));
// // console.log(lh.delete('Ana'));
// console.log(lh.getItem()[13].get(0));
// d.delete('gender');
// console.log(d.getItem());

function LinearHashTable() {
  let item = [];
  function hashFunction(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % 37;
  }
  this.clear = function () {
    item = []
  }
  this.insert = function (key, value) {
    let index = hashFunction(key);
    if(item[index]) {
      while(item[index] != undefined) {
        index++;
      } 
    }
    item[index] = { key, value }
  }
  this.get = function (key) {
    let index = hashFunction(key);
    if(item[index]) {
      while (item[index] != undefined) {
        if (item[index].key == key) {
          return item[index];
        }
        index++;
      } 
    }
    return undefined
  }
  this.delete = function (key) {
    let index = hashFunction(key);
    if (index > -1) {
      while(item[index] != undefined) {
        if(item[index].key == key) {
          item[index] = undefined;
          return true
        }
        index++;
      } 
    }
    return false
  }
  this.getItem = function () {
    return item;
  }
}

let lih = new LinearHashTable();
lih.insert('Ana', '賽車手');
lih.insert('Donnie', '123');
console.log(lih.get('Donnie'));
console.log(lih.getItem())
lih.delete('Donnie');
console.log(lih.getItem())