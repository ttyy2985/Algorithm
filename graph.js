var Graph = function () {
  let edges = {};
  let vertexs = [];
  this.addVertex = function (point) {
    if (vertexs.includes(point)) return;
    vertexs.push(point);
  };
  this.addEdge = function (to, end, twoWay = true) {
    //true: 雙向, false: 單向
    if (!edges[to]) {
      edges[to] = [];
    }
    if (!edges[end] && twoWay) {
      edges[end] = [];
    }
    if (twoWay) {
      if (!edges[end].includes(to)) edges[end].push(to);
    }
    if (!edges[to].includes(end)) edges[to].push(end);
  };
  this.removeVertex = function (vertex) {
    const index = vertexs.indexOf(vertex);
    if (index == -1) return;
    vertexs.splice(index, 1);
    Object.keys(edges).forEach((key) => {
      console.log(edges[key], vertex, key);
      if (edges[key].includes(vertex)) {
        this.removeEdge(vertex, key);
      }
    });
    delete edges[vertex];
  };
  this.removeEdge = function (to, from) {
    edges[to] = edges[to].filter((v) => v !== from);
    edges[from] = edges[from].filter((v) => v !== to);
  };
  this.getPoints = function () {
    return vertexs;
  };
  this.getEdges = function () {
    const result = { ...edges };
    return result;
  };
  this.depthFirstRecursive = function (start) {
    const result = [];
    const visited = {};
    const adjacencyList = edges;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  };
  this.depthFirstIterative = function (start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      edges[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  };
};

var g = new Graph();
g.addVertex(1);
g.addVertex(5);
g.addVertex(7);
g.addEdge(1, 7);
g.addEdge(5, 7, false);
g.addEdge(5, 1, false);
console.log(g.depthFirstIterative(7));
console.log(g.depthFirstRecursive(7));
console.log(g.getPoints());
console.log(g.getEdges());
// g.removeEdge(5, 1);
g.removeVertex(1);
console.log(g.getPoints());
console.log(g.getEdges());
