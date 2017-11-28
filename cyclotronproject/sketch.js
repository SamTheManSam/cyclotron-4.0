//buttons
var button0;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;

//images
var img;
var img2;
var img3;
var img4;

//video buttons
var vid;
var playing = false;
var completion;

//for copy and pasting
// button0.show();
// button1.show();
// button2.show();
// button3.show();
// button4.show();
// button5.show();
// button6.show();
// button7.show();

// button0.show();
// button1.show();
// button2.show();
// button3.show();
// button4.show();
// button5.show();
// button6.show();
// button7.show();

function preload() {
  img = loadImage("Cyclotron.jpg");
  img2 = loadImage("logo.png");
  img3 = loadImage("cern.jpg");
  img4 = loadImage("Homepage.jpg");
}

var spiral = {
  a:0,
  r:50
}

function setup() {

  home();
}

function draw() {

  //these buttons will move the screen to the part of the webpage that is specified
}

function explanation() {

  links();
   clear();

  //sets the page up
blanket();

  //red page
  fill(250,100,100);
  rect(0,200,windowWidth,windowHeight);

  //"What is a cyclotron?" explanation
  textSize(15);
  fill(0,255);
  text("A cyclotron is a particle accelerator.", 10, 250);
  text("A particle accelerator accelerates subatomic particles to high velocities.", 10, 265);
  text("It consists of a circular vacuum chamber between two magnets.", 10, 280);

  fill(255,150,150);
  completion = vid.time() / vid.duration();
  ellipse(completion, 50, 20, 20);

  //"What is a cyclotron?" Video explanation

  textSize(30);
  stroke(200,200);
  text("Video", 450,450);

    // vid = createVideo("videotron.mp4");
    // vid.size(400, 0);

    // // button = createButton('play');
    // // button.mousePressed(toggleVid); // attach button listener
    // button5 = createButton('play');
    // button.position(300,500);
    // button5.mousePressed(toggleVid);

}

function theory_of_operation() {

  links();

  clear();

//redo
  fill(255,255,255);
  rect(0,0,windowWidth,windowHeight);

  //sets the page up
blanket();

  //green page
  fill(150,250,170);
  rect(0,200,windowWidth,windowHeight);

    //image explaner
    image(img, windowWidth / 2,200,windowWidth / 2,windowHeight);
  }

    /* My eventual goal with this page is to make an inmation with a couple
    sliders that will control variables, and when the user is done adjusting the
    variables, they can press a "play" button and have an inmation of the particle's
    motion... perhaps I can make it a game where the user must set correct
    variables to make the particle accelerator work correctly.

    */


function animation() {
links();

  clear();

  fill(255,255,255);
  rect(0,0,windowWidth,windowHeight);

    //sets the page up
     blanket();

     //blue page
     fill(100,100,250);
     rect(0,200,windowWidth,windowHeight);

     //the spiral-cyclotron motion
     spiral.a = 0;
     spiral.r = 50;

     for(i=0; i<=1000; i++){
       setTimeout(function(){
     var x = spiral.r * cos(spiral.a);
     var y = spiral.r * sin(spiral.a);
     spiral.a += 0.01;
     spiral.r += .1;
     fill(0,0,0);
     push();
       translate(width / 2, height / 2);
       strokeWeight(2);
       stroke(0,255);
       ellipse(x/5, y/5, 5, 5);
       pop();
     }, 50);
     }

  var col = fill(250,25,255);
  button6 = createButton('Go!');
    button6.style("background-color", col);
    button6.position(750, 550);
    button6.mousePressed(cyclogo);
}

function cyclogo() {

  //blue page plastered over last one
  fill(100,100,250);
  rect(0,200,windowWidth,windowHeight);

    spiral.a = 0;
    spiral.r = 50;
    //the spiral-cyclotron motion
    for(i=0; i<=1000; i++){
      setTimeout(function(){
    var x = spiral.r * cos(spiral.a);
    var y = spiral.r * sin(spiral.a);
    spiral.a += 0.01;
    spiral.r += .1;
    fill(0,0,0);
    push();
      translate(width / 2, height / 2);
      strokeWeight(2);
      stroke(0,255);
      ellipse(x/5, y/5, 5, 5);
      pop();
    }, 50);
    }
}

function computing() {

links();
  clear();

  fill(255,255,255);
  rect(0,0,windowWidth,windowHeight);

    //sets the page up
    blanket();

    //test page
    fill(250,250,150);
    rect(0,200,windowWidth,windowHeight);

    //computing
    image(img3, windowWidth / 2,200,windowWidth /2,windowHeight);

    }

    function blanket() {

      links();
      clear();

      createCanvas(windowWidth, windowHeight+200);
      background(255);
      noStroke();

      // This is the black rectange containing the header and buttons
      fill(50,250);
      rect(0,0,windowWidth,175);

      //title
      textSize(50);
      fill(255,255,255);
      text("Cyclotrons", 10,45);

      //subtitle
      fill(125,255);
      textSize(12);
      text("An in depth look at the way a Cyclotron works", 10,70);

      //blue page
      fill(100,100,250);
      rect(0,200,windowWidth,windowHeight);

      textSize(50);
      text("Amuters Cyclotrons", 500,500);

      button5 = createImg('logo.png');
        button5.size(75,75);
        button5.position(windowWidth * .9, 25);
        button5.mousePressed(home);
    }

    function home() {

      links();
      clear();

      createCanvas(windowWidth, windowHeight+200);
      background(255);
      noStroke();

      // This is the black rectange containing the header and buttons
      fill(50,250);
      rect(0,0,windowWidth,175);

      //title
      textSize(50);
      fill(255,255,255);
      text("Cyclotrons", 10,45);

      //subtitle
      fill(125,255);
      textSize(12);
      text("An in depth look at the way a Cyclotron works", 10,70);

      image(img4, 0,200,windowWidth,windowHeight);
    }

    function links () {
      var col = fill(255,0,0);
      button0 = createButton('What is a cyclotron?');
        button0.style("background-color", col);
        button0.position(50, 125);
        button0.mousePressed(explanation);

      button1 = createButton('How does it work?');
      button1.style("background-color", col);
        button1.style("background-color", col);
        button1.position(200, 125);
        button1.mousePressed(theory_of_operation);

        button2 = createButton('Try it yourself');
        button2.style("background-color", col);
        button2.position(350, 125);
        button2.mousePressed(animation);

      button3 = createButton('Cyclotrons and Computing');
      button3.style("background-color", col);
        button3.position(500, 125);
        button3.mousePressed(computing);

        button4 = createImg('logo.png');
          button4.size(75,75);
          button4.position(windowWidth * .9, 25);
          button4.mousePressed(home);

    }

// function mousePressed() {
//   if (!playing) {
//     vid.play();
//     vid.time((mouseX/width) * vid.duration());
//     playing = true;
//   }
//   else {
//     vid.pause();
//     playing = false;
//   }
// }
//
// function toggleVid() {
//  if (playing) {
//    vid.pause();
//    button.html('play');
//  }
//  else {
//    vid.loop();
//    button.html('pause');
//  }
//  playing = !playing;
// }
