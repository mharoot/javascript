class Graph {

  constructor() {
    // Key = vertex, value = array of neighbors.
    this.neighbors = {};
    this.startVertex;
    this.endVertex;
  }
  
  addEdge(u, v) {
    u = JSON.stringify(u),
    v = JSON.stringify(v);
    if(this.neighbors[u] === undefined) {
      this.neighbors[u] = [];
    }

    // to implement a directed graph delete this entire if block 3 lines
    if(this.neighbors[v] === undefined) {
      this.neighbors[v] = [];
    }

    this.neighbors[u].push(v);
    
    // to implement a directed graph delete this line
    this.neighbors[v].push(u);
  }

  print(s) {  // A quick and dirty way to display output.
    s = s || 'empty';
    // document.getElementById('display').innerHTML += s + '<br>';
    console.log(s);
  }  

  resetNeighbors() {
    this.neighbors = {};
  }

  deleteVertex(u) {
    u = JSON.stringify(u);
    console.log(this.neighbors[u]);
    console.log(u);
    while(this.neighbors[u].length > 0)
    {
      var vertexKey = this.neighbors[u].pop();
      var key = this.neighbors[vertexKey].indexOf(u);
      this.neighbors[vertexKey].splice(key,1);
    }
    delete this.neighbors[u];
  }


}