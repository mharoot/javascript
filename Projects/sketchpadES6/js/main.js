// Variables to keep track of the mouse position and left-button status 
var mouseX,mouseY,mouseDown=0;

// Variables to keep track of the touch position
var touchX,touchY;

var currentColor;


// Variable of our sketchpad graph
var SP;

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

function sketchpad_mouseDown() {
  mouseDown=1;
  SP.drawDot(mouseX, mouseY, currentColor);
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
    SP.drawDot(mouseX, mouseY, currentColor);
  }
}
  
  
// Draw something when a touch start is detected
function sketchpad_touchStart(e) {
  // Update the touch co-ordinates
  getTouchPos(e);

  
  SP.drawDot(touchX,touchY, currentColor);

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
  SP.drawDot(touchX,touchY, currentColor); 

  // Prevent a scrolling action as a result of this touchmove triggerinSP.
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

// Set-up the canvas and add our event handlers after the page has loaded
//function init() {
  
  // Get the specific canvas element from the HTML document
  canvas = document.getElementById('sketchpad');
  SP = new SketchPad(canvas);

  SP.adjustCanvasSizeToUserScreen(screen.height, screen.width);

  var x = 0, y = 0; 
  for (var j = 0; j < canvas.height - 1; j++) {
    for ( var i = 1; i < canvas.width; i++) {
      SP.addEdge({x:(i-1), y:j}, {x:i, y:j});
      SP.addEdge({x:(i-1), y:j}, {x:i, y:(j+1)})
    }
  }

  SP.print(SP.neighbors);

  // If the browser supports the canvas tag, get the 2d drawing context for this canvas
  if (canvas.getContext)
    SP.ctx = canvas.getContext('2d');

  // Check that we have a valid context to draw on/with before adding event handlers
  if (SP.ctx) {
    currentColor= 'black';

    // React to mouse events on the canvas, and mouseup on the entire document
    canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
    canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
    window.addEventListener('mouseup', sketchpad_mouseUp, false);

    // React to touch events on the canvas
    canvas.addEventListener('touchstart', sketchpad_touchStart, false);
    canvas.addEventListener('touchmove', sketchpad_touchMove, false);


    // init user controls for changing colors
    initMenuControls();  
  }
//}

function initMenuControls() {
  const menuButtons = document.getElementsByClassName("nav-item");

  for (var index = 0; index < menuButtons.length; index++) {
    menuButtons[index].addEventListener('click',  function (e) {
      console.log(this.id);
      switch (this.id)
      {
        case 'start_button': currentColor='green'; break;
        case 'end_button': currentColor='red'; break;
        case 'add_edges': currentColor='lightblue'; break;
        case 'clear_button': currentColor='black'; SP.clearCanvas(); break;
        case 'prepare_graph_button': 
          currentColor='blue';  
          console.log("shortest path activated"); 
          var s = JSON.stringify(SP.startVertex), 
            e = JSON.stringify(SP.endVertex);
            console.log(SP.startVertex)
          SP.shortestPath(s, e);  
        break;
        default:  
          currentColor='black';
      }
      }, false);
  }
}