// Variables for referencing the canvas and 2dcanvas context
var canvas,ctx;

// Variables to keep track of the mouse position and left-button status 
var mouseX,mouseY,mouseDown=0;

// Variables to keep track of the touch position
var touchX,touchY;

// Variable to keep track of color
var currentColor;

// Variable to adjust the pixel width
const pencilThickness = 1;

// Variable of our graph
const G = new Graph();


function drawDot(ctx,x,y,size,color) {
  // opaque black
  r=0; g=0; b=0; a=255; 

  switch(color) {
    case 'blue':   b=255;   break;
    case 'green':  g = 255; G.startVertex = {x,y}; break;
    case 'red':    r = 255; G.endVertex = {x,y};   break;
    case 'purple': r = 102; g = 51; b = 153;       break;
    case 'pink':   r = 255; g = 192; b = 203;      break;
    case 'yellow': r = 255; g=255;  b = 0; a=76.5;   break;
    default: r=0; g=0; b=0; G.deleteVertex({x,y}); console.log('deleting:'); console.log({x,y});
  }

  // Select a fill style
  ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

  // Draw a filled circle
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();


} 

function drawPath(ctx,x,y,size,color) {
  // opaque black
  r=0; g=0; b=0; a=255; 

  switch(color) {
    case 'blue':   b=255;   break;
    case 'green':  g = 255; G.startVertex = {x,y}; break;
    case 'red':    r = 255; G.endVertex = {x,y};   break;
    case 'purple': r = 102; g = 51; b = 153;       break;
    case 'pink':   r = 255; g = 192; b = 203;      break;
    case 'yellow': r = 244; g=232;  b = 66; a=0;   break;
    default: r=0; g=0; b=0; G.deleteVertex({x,y}); console.log('deleting:'); console.log({x,y});
  }

  // Select a fill style
  ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
} 


// Clear the canvas context using the canvas width and height
function clearCanvas(canvas,ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Keep track of the mouse button being pressed and draw a dot at current location
function sketchpad_mouseDown() {
  mouseDown=1;
  drawDot(ctx,mouseX,mouseY,pencilThickness, currentColor);
}


// Keep track of the mouse button being released
function sketchpad_mouseUp() {
  mouseDown=0;
}

// Keep track of the mouse position and draw a dot if mouse button is currently pressed
function sketchpad_mouseMove(e) { 
  // Update the mouse co-ordinates when moved
  getMousePos(e);

  // Draw a dot if the mouse button is currently being pressed
  if (mouseDown==1) {
    // console.log(currentColor);
    drawDot(ctx,mouseX,mouseY,pencilThickness, currentColor);
  }
}

// Get the current mouse position relative to the top-left of the canvas
function getMousePos(e) {
  if (!e)
    var e = event;

  if (e.offsetX) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
  }
  else if (e.layerX) {
    mouseX = e.layerX;
    mouseY = e.layerY;
  }
  // console.log({X:mouseX, Y:mouseY})
}

// Draw something when a touch start is detected
function sketchpad_touchStart(e) {
  // Update the touch co-ordinates
  getTouchPos(e);

  
  drawDot(ctx,touchX,touchY,pencilThickness, currentColor);

  // Prevents an additional mousedown event being triggered
  e.preventDefault();
}

// Draw something and prevent the default scrolling when touch movement is detected
function sketchpad_touchMove(e) { 
  // Update the touch co-ordinates
  getTouchPos(e);

  // During a touchmove event, unlike a mousemove event, we don't need to check
  // if the touch is engaged, since there will always be contact with the 
  // screen by definition.
  drawDot(ctx,touchX,touchY,pencilThickness, currentColor); 

  // Prevent a scrolling action as a result of this touchmove triggering.
  e.preventDefault();
}

// Get the touch position relative to the top-left of the canvas
// When we get the raw values of pageX and pageY below, they take into account the scrolling on the page
// but not the position relative to our target div. We'll adjust them using "target.offsetLeft" and
// "target.offsetTop" to get the correct values in relation to the top left of the canvas.
function getTouchPos(e) {
  if (!e)
    var e = event;

  if(e.touches) {
    if (e.touches.length == 1) { // Only deal with one finger
      var touch = e.touches[0]; // Get the information for finger #1
      touchX=touch.pageX-touch.target.offsetLeft;
      touchY=touch.pageY-touch.target.offsetTop;
    }
  }
}

function adjustCanvasSizeToUserScreen()
{
  height = (screen.height/2);
  width  = (screen.width*(.95));
  canvas.height = height;
  canvas.width  = width;
  canvas.style.height = height;
  canvas.style.width = width;
}

// Set-up the canvas and add our event handlers after the page has loaded
function init() {
  // Get the specific canvas element from the HTML document
  canvas = document.getElementById('sketchpad');
  adjustCanvasSizeToUserScreen();
  
  y = 0; 
  x = 0; 
  for (var j = 0; j < canvas.height - 1; j++) {
    for ( var i = 1; i < canvas.width; i++) {
      G.addEdge({x:(i-1), y:j}, {x:i, y:j});
      G.addEdge({x:(i-1), y:j}, {x:i, y:(j+1)})
    }
  }
  G.print(G.neighbors);


    

  // If the browser supports the canvas tag, get the 2d drawing context for this canvas
  if (canvas.getContext)
    ctx = canvas.getContext('2d');

  // Check that we have a valid context to draw on/with before adding event handlers
  if (ctx) {
    currentColor = 'black';

    // React to mouse events on the canvas, and mouseup on the entire document
    //  canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
    //  canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
    canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
    canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
    window.addEventListener('mouseup', sketchpad_mouseUp, false);

    // React to touch events on the canvas
    canvas.addEventListener('touchstart', sketchpad_touchStart, false);
    canvas.addEventListener('touchmove', sketchpad_touchMove, false);


    // init user controls for changing colors
    initMenuControls();  
  }
}

function initMenuControls() {
  const menuButtons = document.getElementsByClassName("nav-item");

  for (var index = 0; index < menuButtons.length; index++) {
    menuButtons[index].addEventListener('click',  function (e) {
      switch (this.id)
      {
        case 'start_button': currentColor='green'; break;
        case 'end_button': currentColor='red'; break;
        case 'add_edges': currentColor='lightblue'; break;
        case 'clear_button': currentColor='black'; clearCanvas(canvas,ctx); break;
        case 'prepare_graph_button': 
          currentColor='blue';  
          console.log("shortest path activated"); 
          var s = JSON.stringify(G.startVertex), 
            e = JSON.stringify(G.endVertex);
          shortestPath(s, e);  
        break;
        default:  currentColor='black';
      }
      }, false);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function shortestPath(source, target) {
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
    var neighbors = G.neighbors[u];

    for (var i = 0; i < neighbors.length; ++i) {
      var v = neighbors[i];

      if (visited[v]) {
        continue;
      }

      visited[v] = true;

      if( v !== source && v !== target) {
        pos = JSON.parse(neighbors[i]);
        // await sleep(0.001);
        drawDot(ctx, pos.x, pos.y, pencilThickness, "blue");
      }

      if (v === target) {   // Check if the path is complete.
        var path = [ v ]; // If so, backtrack through the path.

        while (u !== source) {
          path.push(u);
          u = predecessor[u];
        }

        path.push(u);
        path.reverse(); //dont reverse just pop

        //for loop path[i]
        for (var i = 0; i < path.length; i++) {
        
        //while (path.length > 0) {
          pos = JSON.parse(path[i]);//JSON.parse(path.pop());
          //console.log(p);
          await sleep(5);
          drawDot(ctx, pos.x, pos.y, pencilThickness, "yellow");

        }
        
        //this.print(path.join(' &rarr; '));
        return;
      }

      predecessor[v] = u;
      queue.push(v);

    }

  }

  G.print('there is no path from ' + source + ' to ' + target);

}