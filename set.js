function Set2() {
  let item = {};
  this.has = function(value) {
    return item.hasOwnProperty(value);
  };
  this.add = function(value) {
    if(!this.has(value)) {
      item[value] = value;
    }
  }
  this.size = function() {
    return Object.keys(item).length;
  };
  this.remove = function(element) {
    if(this.has(element)) {
      delete item[element];
      return true;
    }
    return false;
  }
  this.values = function () {
    return Object.values(item)
  }
  this.clear = function() {
    item = {}
  }
  this.union = function(otherSet) {
    let result = new Set2();
    otherSet = otherSet.values();
    for (let i = 0; i < otherSet.length; i++) {
      result.add(otherSet[i]);
    }
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      result.add(values[i]);
    }
    return result.values();
  };
  this.intersection = function (otherSet) {
    let result = new Set2();
    const minArr = this.size() < otherSet.size() ? this.values() : otherSet.values();
    const compareSet = this.size() < otherSet.size() ? otherSet : this;
    for (let i = 0; i < minArr.length; i++) {
      if (compareSet.has(minArr[i])) {
        result.add(minArr[i]);
      }
    }
    return result.values();
  };
  this.difference = function (otherSet) {
    let result = new Set2();
    const values = this.values(); 
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        result.add(values[i]);
      }
    }
    return result.values();
  }
}

let s = new Set2();
s.add(5);
s.add(2);
s.add(3);
let a = new Set2();
a.add(1);
a.add(2);
a.add(66);
console.log(s.intersection(a));
console.log(s.difference(a));
console.log(a.difference(s));
console.log(s.union(a));
s.remove(2);
console.log(s.values());
console.log(s.has(1), s.has(11));
console.log(s.values());


