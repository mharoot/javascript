class Graph {

  constructor() {
    // Key = vertex, value = array of neighbors.
    this.neighbors = {};
    this.startVertex = {};
    this.endVertex = {};
  }
  
  addEdge(u, v) {
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
    document.getElementById('display').innerHTML += JSON.stringify(s) + '<br>';
    console.log(s);
  }  

  resetNeighbors() {
    this.neighbors = {};
  }

  deleteVertex(u) {
    while(this.neighbors[u].length > 0)
    {
      var vertexKey = this.neighbors[u].pop();
      var key = this.neighbors[vertexKey].indexOf(u);
      this.neighbors[vertexKey].splice(key,1);
    }
    delete this.neighbors[u];
  }

  shortestPath(source, target) {
    if (source == target) {    // Delete these four lines if
        this.print(source);    // you want to look for a cycle
        return;                // when the source is equal to
    }                          // the target.

    var queue     = [ source ],
      visited     = { source: true },
      predecessor = {},
      tail        = 0;

    while (tail < queue.length) {
        var u = queue[tail++],  // Pop a vertex off the queue.
        neighbors = this.neighbors[u];

        for (var i = 0; i < neighbors.length; ++i) {
          var v = neighbors[i];

          if (visited[v]) {
            continue;
          }

          visited[v] = true;

          if (v === target) {   // Check if the path is complete.
              var path = [ v ]; // If so, backtrack through the path.

              while (u !== source) {
                  path.push(u);
                  u = predecessor[u];
              }

              path.push(u);
              path.reverse();

              this.print(path);
              return;
            }

            predecessor[v] = u;
            queue.push(v);

        }

      }

      this.print('there is no path from ' + source + ' to ' + target);
  }


}