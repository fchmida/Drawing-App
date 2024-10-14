var stampImage;

function preload(){
    stampImage = loadImage("assets/flower.png");
}

function StampTool(){
	//set an icon and a name for the object
	this.icon = "assets/stamp.jpg";
	this.name = "stamp";
    
    var stampSize = 0.30;
    
	this.draw = function(){
		//if mouse pressed
		if(mouseIsPressed){
			//draw stamp image at current mouse pos
			image(stampImage, mouseX, mouseY, stampImage.width * stampSize, stampImage.height * stampSize);
		}
	}
}