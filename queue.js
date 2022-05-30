// 先進先出
function Queue() {
  let items = [];
  this.enqueue = function (element) {
    items.push(element);
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.rear = function () {
    return items[items.length - 1];
  };
  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.clear = function () {
    items = [];
  };
  this.size = function () {
    return items.length;
  };
  this.print = function () {
    // 列印出佇列內容
    console.log(items.toString());
  }
}

// 優先佇列 (以優先級數判斷)
function PriorityQueue() {
  let items = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function (element, priority) {
    const queueElement = new QueueElement(element, priority);
    if(this.isEmpty()) {
      items.push(queueElement);
    } else {
      let isAdded = false;
      for(let i = 0; i < items.length; i++) {
        if (items[i].priority < queueElement.priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if(!isAdded) {
        items.push(queueElement);
      }
    }
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.rear = function () {
    return items[items.length - 1];
  };
  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.clear = function () {
    items = [];
  };
  this.size = function () {
    return items.length;
  };
  this.print = function () {
    // 列印出佇列內容
    console.log(JSON.stringify(items));
  }
}

// 環狀佇列
function CircularQueue(maxSize) {
  let items = [],front = -1, rear = -1;
  this.enqueue = function (element) {
    if(rear == maxSize - 1) {
      // 佇列已滿
      return;
    }
    items.push(element);
    rear++;
  };
  this.dequeue = function () {
    front++;
    return items.shift();
  };
  this.rear = function () {
    return items[items.length - 1];
  };
  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.clear = function () {
    items = [];
  };
  this.size = function () {
    return items.length;
  };
  this.print = function () {
    // 列印出佇列內容
    console.log(items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('令狐衝');
queue.enqueue('西方不拜');
queue.enqueue('田薄光');
queue.enqueue('任贏贏');
console.log(queue.front());
console.log(queue.size());
queue.print();
queue.dequeue();
console.log(queue.front());
console.log(queue.size());
queue.print();

const priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());
priorityQueue.enqueue('令狐衝', 2);
priorityQueue.enqueue('西方不拜', 1);
priorityQueue.enqueue('田薄光', 4);
priorityQueue.enqueue('任贏贏', 3);
console.log(priorityQueue.front());
console.log(priorityQueue.size());
priorityQueue.print();
priorityQueue.dequeue();
console.log(priorityQueue.front());
console.log(priorityQueue.size());
priorityQueue.print();

const circularQueue = new CircularQueue(4);
console.log(circularQueue.isEmpty());
circularQueue.enqueue('環狀1');
circularQueue.enqueue('環狀2');
circularQueue.enqueue('環狀3');
circularQueue.enqueue('環狀4');
console.log(circularQueue.front());
console.log(circularQueue.size());
circularQueue.print();
circularQueue.dequeue();
console.log(circularQueue.front());
console.log(circularQueue.size());
circularQueue.print();