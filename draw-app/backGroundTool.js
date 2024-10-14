function backGroundTool(){
      //set an icon and a name for the object
      this.icon = "assets/canvas.png";
      this.name = "backGroundTool";

// Initialize the background color to a random hue
  var backgroundColor = color(random(360), 80, 80);

  // Define sliders using createSlider() function
   
  var hueSlider = createSlider(0, 360, hue(backgroundColor));
  var saturationSlider = createSlider(0, 100, saturation(backgroundColor));
  var brightnessSlider = createSlider(0, 100, brightness(backgroundColor));
   
   
   
 // Define label using createSpan() function
   
  var hueLabel = createSpan("Hue: " + hueSlider.value());
  var saturationLabel = createSpan("Saturation: " + saturationSlider.value());
  var brightnessLabel = createSpan("Brightness: " + brightnessSlider.value());

  // Define a container div to hold the sliders and labels
  var container = createDiv();
   
    // set CSS style for container div using style() function
  container.style("display", "flex");
  container.style("flex-direction", "column");
  container.style("align-items", "center");

  // Define function to update the background color when a slider is changed
  function updateBackgroundColor() {
     
    // Update background color using values of sliders
    backgroundColor = color(hueSlider.value(), saturationSlider.value(), brightnessSlider.value());
     
    // Update label values
    hueLabel.html("Hue: " + hueSlider.value());
    saturationLabel.html("Saturation: " + saturationSlider.value());
    brightnessLabel.html("Brightness: " + brightnessSlider.value());
  }

  // Define the draw function to set the background color
  this.draw = function() {
    colorMode(HSB, 360, 100, 100);
    background(backgroundColor);
  };

  // clears option button when tool is deselected
  this.unselectTool = function() {
     
    // Remove all child elements of the options button
    select(".options").html("");
     
  };

  // Define the populateOptions function to toggle the adjustable background colour
  this.populateOptions = function() {
    // Add sliders and labels to the container div
    hueLabel.parent(container);
    hueSlider.parent(container);
    saturationLabel.parent(container);
    saturationSlider.parent(container);
    brightnessLabel.parent(container);
    brightnessSlider.parent(container);

    // Add container div to options button
    container.parent(select(".options"));

    // Call the updateBackgroundColor function when a slider is changed
    hueSlider.input(updateBackgroundColor);
    saturationSlider.input(updateBackgroundColor);
    brightnessSlider.input(updateBackgroundColor);
  };
}
