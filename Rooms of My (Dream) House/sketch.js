/***********************************************************************************
	Rooms of a House Sample
	by Scott Kildall

  Shows navigation structure using the keyboard between 4 rooms

  []
	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/



// variable that is a function 
var drawFunction;


// offset from bottom of screen
var gTextOffset = 20;

//instructions array
var strings = [];
var midX
var startY;
var lineHeight = 24;
var images = [];

//this loads the images form the folder for p5 to readily use.
function preload(){

  images[0] = loadImage('Assets/BedOne.png');
  images[1] = loadImage('Assets/Hall.png');
  images[2] = loadImage('Assets/BedThree.png');
  images[3] = loadImage('Assets/Master.png');
  images[4] = loadImage('Assets/BedTwo.png');
  images[5] = loadImage('Assets/bonus.png')

}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawhallway;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  fill(0);
  

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========



//-- drawTwo() will draw the image at index 1 from the array
drawhallway = function() {
  image(images[1],width/2, height/2);

  fill(240,120,0);
  text("hallway PRESS 2 for bedroom 1 , 3 for bedroom 2, 4 for bedroom 3, 5 for master bedroom , or 6 For Suprise", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 0 from the array
drawbedOne = function() {
   image(images[0],width/2, height/2);

   fill(75,0,130);
   text("bedOne - Press 1 To Return to Hallway", width/2, height - gTextOffset);
}


drawbedTwo = function() {
  image(images[4],width/2, height/2);

  fill(255,20,147);
  text("bedTwo - Press 1 To Return to Hallway", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawbedThree = function() {
   image(images[2],width/2, height/2);

   fill(255,20,147);
   text("bedThree - Press 1 To Return to Hallway", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawMaster = function() {
   image(images[3],width/2, height/2);

   fill(30,144,255);
   text("Master - Press 1 To Return to Hallway", width/2, height - gTextOffset);
}

drawBonus = function() {
  image(images[5],width/2, height/2);

  fill(30,144,255);
  text("YOU FOUND THE BONUS ROOM! - Press 1 To Return to Hallway", width/2, height - gTextOffset);
}




//-- Will draw the current instuctions on the screen
// function drawInstructions() {
//   text("Master", width/2, height - gTextOffset);
// }


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyPressed() {
  // shows which was types
  //print(key);
  print(drawFunction);

  // hallway [k] 
  if( drawFunction === drawhallway ) {

    if( key === '2') {
        drawFunction = drawbedOne;
    }

    if( key === '3' ) {
      drawFunction = drawbedTwo;
    }

    if( key === '4' ) {
      drawFunction = drawbedThree;
    }

    if( key === '6' ) {
      drawFunction = drawBonus;
    }

    else if( key === '5' ) {
      drawFunction = drawMaster;
    }

  }

  // bedOne [r]
  else if( drawFunction === drawbedOne ) {
    if( key === '1' ) {
      drawFunction = drawhallway;
    }
  }


  else if( drawFunction === drawbedTwo ) {
    if( key === '1' ) {
      drawFunction = drawhallway;
    }
  }

  // bedThree [o]
  else if( drawFunction === drawbedThree ) {
    if( key === '1' ) {
      drawFunction = drawhallway;
    }
  }

  else if( drawFunction === drawBonus ) {
    if( key === '1' ) {
      drawFunction = drawhallway;
    }
  }


  else if( drawFunction === drawMaster ) {
    if( key === '1' ) {
      drawFunction = drawhallway;
    }
  }

  // Master [b]


  
}


