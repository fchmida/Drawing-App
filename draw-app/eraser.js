function eraser(){
	//set an icon and a name for the object
	this.icon = "assets/eraser.jpg";
	this.name = "eraser";

    var eraserSize = 1;  // set the initial eraser size
    var previousMouseX = -1; //these values store the locations from the last frame. They are -1 because we haven't started to erase yet.
    var previousMouseY = -1;
    
    //flag to indiciate whether we're currently erasing or not
    var isErasing = false;
    
    //function to toggle between drawing and erasing modes
    function toggleErasing(){
        isErasing = !isErasing;
        if (isErasing) {
            stroke(255); //white colour for erasing
        }else {
            stroke(0); //set back to black for drawing
        }
    }   
    
    //event listener to switch between drawing and erasing functions
    keyReleased = function() { //two options when erasing by pressing control or by pressing with mouse
        if (keyCode === CONTROL) {
            toggleErasing();
        }
    };
    
     this.draw = function() {
    // if we're currently erasing
    if (isErasing) {
      // check if the previousX and Y are -1. set them to the current
      // mouse X and Y if they are.
      if (previousMouseX == -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
      // if we already have values for previousX and Y we can draw a white line from 
      // there to the current mouse location
      else {
        strokeWeight(eraserSize); // set stroke weight based on eraser size
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
    }
    // if we're not erasing, reset the previousMouse values
    else {
        previousMouseX = -1;
        previousMouseY = -1;
    }
     mousePressed = function() { 
        toggleErasing();
    }

    mouseReleased = function() {
        isErasing = false;
        stroke(0); // set stroke color back to black
    }
  };
    
    //slider for eraser size
    var slider = createSlider(1, 50, eraserSize, 1);
    slider.position(630,10);
    slider.input(function() {
    eraserSize = this.value();
    slider.class('custom-slider');
    });

    //label for eraser tool size
    var eraserLabel = createElement('label', 'Eraser size');
    eraserLabel.position(650, 0);
} 