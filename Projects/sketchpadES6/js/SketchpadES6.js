class SketchPad extends Graph {

  constructor(canvas) {
    super();
    // Variables for referencing the canvas and 2dcanvas context
    this.canvas = canvas;
    this.ctx;

    // Variable to adjust the pixel width
    this.pencilThickness = 1;

  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawDot(x,y,color) {
    // opaque black
    let r=0, g=0, b=0, a=255; 

    switch(color) {
      case 'blue':   r=173, g=216, b=230, a=255;   break;
      case 'green':  g = 255; this.startVertex = {x,y}; break;
      case 'red':    r = 255; this.endVertex = {x,y};   break;
      case 'yellow': r = 255; g=255;  b = 0; a=76.5;   break;
      default: 
        this.deleteVertex({x,y});
        console.log('deleting:'); 
        console.log({x,y});
        r=0; g=0; b=0;
    }
    // Select a fill style
    this.ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    // Draw a filled circle
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.pencilThickness, 0, Math.PI*2, true); 
    this.ctx.closePath();
    this.ctx.fill();
  }
  
  adjustCanvasSizeToUserScreen(h,w)
  {
    var height = 100//(h/2);
    var width  = 100//(w*(.95));
    this.canvas.height = height;
    this.canvas.width  = width;
    this.canvas.style.height = height;
    this.canvas.style.width = width;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async shortestPath(source, target) {
    if (source == target) {    // Delete these four lines if
      this.print(source);      // you want to look for a cycle
      return;                  // when the source is equal to
    }                          // the target.

    var queue       = [ source ],
        visited     = { source: true},
        predecessor = {},
        tail        = 0;
    while (tail < queue.length) {
      var u = queue[tail++]; // Pop a vertex off the queue.
      var neighbors = this.neighbors[u];

      for (var i = 0; i < neighbors.length; ++i) {
        var v = neighbors[i];

        if (visited[v]) {
          continue;
        }

        visited[v] = true;

        if( v !== source && v !== target) {
          var pos = JSON.parse(neighbors[i]);
          // await this.sleep(0.001);
          this.drawDot(pos.x, pos.y, "blue");
        }

        if (v === target) {   // Check if the path is complete.
          var path = [ v ]; // If so, backtrack through the path.

          while (u !== source) {
            path.push(u);
            u = predecessor[u];
          }

          path.push(u);
          //path.reverse(); // dont reverse just pop ? or counter backwards?

          //for loop path[i]
         // for (var i = 0; i < path.length; i++) {
          while (path.length > 0) {
            //var pos = JSON.parse(path[i]);
            var pos = JSON.parse(path.pop());
            await this.sleep(5);
            this.drawDot(pos.x, pos.y, "yellow");
          }
          
          //this.print(path.join(' &rarr; '));
          return;
        }

        predecessor[v] = u;
        queue.push(v);

      }

    }

    this.print('there is no path from ' + source + ' to ' + target);

  }


}