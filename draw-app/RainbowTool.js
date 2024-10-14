function RainbowTool() {
  // Set an icon and a name for the object
  this.icon = "assets/rainbow.jpg";
  this.name = "RainbowTool";

  // Initialize variables to store previous mous x and y positions
  var previousMouseX;
  var previousMouseY;

  this.draw = function() {
    // checks if mouse is currrently being pressed
    if (mouseIsPressed) {
      // makes sure previous mouse x and y positions are defined
      if (previousMouseX !== undefined && previousMouseY !== undefined) {
         
        // Calculate distance between previous mouse position and current one
        var distance = dist(previousMouseX, previousMouseY, mouseX, mouseY);
       
        // Draw rainbow-colored lines

        for (var i = 0; i < distance; i += 10) {
          // Calculate interpolation ratio based on the distance
            // here we calculate the ration of the current step i to the ttal distance between the previous and current mouse positions.
       
          var ratio = i / distance;
 
          // Calculate hue value based on the ratio
          var hue = map(ratio, 0, 1, 0, 360);
         
          // Set stroke color using HSB color mode
          stroke(hue, 80, 80);
         
          // Calculate the positions of the line segment
           
           
          var startX = previousMouseX + (mouseX - previousMouseX) * ratio;
          var startY = previousMouseY + (mouseY - previousMouseY) * ratio;
          var endX = previousMouseX + (mouseX - previousMouseX) * (i + 10) / distance;
          var endY = previousMouseY + (mouseY - previousMouseY) * (i + 10) / distance;
 
          // Draw the line segment using starting and ending points found
          line(startX, startY, endX, endY);
        }
      }

      // Update previous mouse position
       
        //previous mouse to current x
      previousMouseX = mouseX;
        // previous mouseY to current y
      previousMouseY = mouseY;
    } else {
        // occurs when mouse button is not pressed
      // Because the mouse is not being dragged, the previous mouse x and y  position is  reset to undefined.
      previousMouseX = undefined;
      previousMouseY = undefined;
    }
  };
}
