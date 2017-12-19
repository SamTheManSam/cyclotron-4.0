//buttons
var button0;
var button1;
var button2;
var button3;
var button4;
var button5;
// for Dr. Manhattan logo image
var button6;

//images
var img;
var img2;
var img3;
var img4;

//video buttons
var vid;
var playing = false;
var pause = true;
var button7;

//animation variable adjusting
var Slider1;
var Slider2;
var Slider3;
var val;

function preload() {
  img = loadImage("Cyclotron.jpg");
  img2 = loadImage("logo.png");
  img3 = loadImage("cern.jpg");
  img4 = loadImage("Homepage.jpg");
  vid = createVideo('videotron.mp4');

  //play button parameters
  button7 = createButton('play');
  button6 = createButton('Go!');
  Slider1 = createSlider(0,1500,750,1);
  Slider2 = createSlider(0,0.04,0.02,0.0001);
  Slider3 = createSlider(0,0.4,0.2,0.001);
  Slider.hide();
  Slider2.hide();
  Slider3.hide();
  button6.hide();
  button7.hide();

}

var spiral = {
  a:0,
  r:50
}

function setup() {
  home();
}

function draw() {}

function explanation() {
  vid.show();
  button6.hide();
  button7.hide();
  Slider1.hide();
  Slider2.hide();
  Slider3.hide();
  clear();
  blanket();

  //red page
  fill(250,100,100);
  rect(0,200,windowWidth,windowHeight);


  //"What is a cyclotron?" explanation
  textSize(15);
  fill(0,255);
  text("What is a cyclotron?", windowWidth/4, 250);

  //video parameters
  vid.position(windowWidth/4,200);
  vid.size(650,550);

  button7 = createButton('play');
  button7.mousePressed(toggleVid);
  button7.position(windowWidth/1.5,700);
}

function theory_of_operation() {

//setup
blanket();
vid.hide();
button7.hide();
button6.hide();
Slider1.hide();
Slider2.hide();
Slider3.hide();

  //green page
  fill(150,250,170);
  rect(0,200,windowWidth,windowHeight);

    //image explaner
    image(img, windowWidth / 2,200,windowWidth / 2,windowHeight);

    fill(0,0,0);
textSize(20);
text("What is a particle accelerator?",10,windowHeight / 2.25);
text("How does a particle accelerator work?",10,windowHeight / 2.25+200);

textSize(14);
t = "           A particle accelerator is a machine that accelerates elementary particles, such as electrons or protons, to very high energies. On a basic level, particle accelerators produce beams of charged particles that can be used for a variety of research purposes. There are two basic types of particle accelerators: linear accelerators and circular accelerators. Linear accelerators propel particles along a linear, or straight, beam line. Circular accelerators propel particles around a circular track. Linear accelerators are used for fixed-target experiments, whereas circular accelerators can be used for both colliding beam and fixed target experiments."
text(t, 20, 300, windowWidth/2-20, windowHeight/2 -100);

s = "           Particle accelerators use electric fields to speed up and increase the energy of a beam of particles, which are steered and focused by magnetic fields. The particle source provides the particles, such as protons or electrons, that are to be accelerated. The beam of particles travels inside a vacuum in the metal beam pipe. The vacuum is crucial to maintaining an air and dust free environment for the beam of particles to travel unobstructed. Electromagnets steer and focus the beam of particles while it travels through the vacuum tube. Electric fields spaced around the accelerator switch from positive to negative at a given frequency, creating radio waves that accelerate particles in bunches. Particles can be directed at a fixed target, such as a thin piece of metal foil, or two beams of particles can be collided. Particle detectors record and reveal the particles and radiation that are produced by the collision between a beam of particles and the target."
text(s, 20, windowHeight/1.5+100, windowWidth/2-20, windowHeight-150);
  }

    /* My eventual goal with this page is to make an inmation with a couple
    Sliders that will control variables, and when the user is done adjusting the
    variables, they can press a "play" button and have an inmation of the particle's
    motion... perhaps I can make it a game where the user must set correct
    variables to make the particle accelerator work correctly.

Slider.hide();
Slider2.hide();
Slider3.hide();


    */


function animation() {

  vid.hide();
  button6.hide();
  button7.hide();
  Slider1.show();
  Slider2.show();
  Slider3.show();
  Slider1.position(950, 500);
  Slider2.position(950, 520);
  Slider3.position(950, 540);

  clear();
  fill(255,255,255);
  rect(0,0,windowWidth,windowHeight);
  blanket();

  //blue page
  fill(100,100,250);
  rect(0,200,windowWidth,windowHeight);
  //the spiral-cyclotron motion
  spiral.a = 0;
  spiral.r = 50;

  //go button
  var col = fill(250,25,255);
  button6 = createButton('Go!');
  button6.style("background-color", col);
  button6.position(950,600);
  button6.mousePressed(cyclogo);
  fill(0,0,0);
  textSize(15);
  text("Play with the program and see how to make it move fastest!",300,250);
}

function cyclogo() {

  spiral.a = 0;
  spiral.r = 50;

  var val = Slider1.value();
  var val2 = Slider2.value();
  var val3 = Slider3.value();


  //blue page plastered over last one
  fill(100,100,250);
  rect(0,200,windowWidth,windowHeight);

  //the spiral-cyclotron motion
  for(i=0; i<=val; i++){
    setTimeout(function(){
      var x = spiral.r * cos(spiral.a);
      var y = spiral.r * sin(spiral.a);
      spiral.a += val2;
      spiral.r += val3;
      fill(0,0,0);
      push();
      translate(width / 2, height / 2);
      strokeWeight(2);
      stroke(0,255);
      ellipse(x/5, y/5, 5, 5);
      pop();
    }, 50);
  }
  fill(0,0,0);
  text("Play with the program and see how to make it move fastest!",300,250);
}

function computing() {

  vid.hide();
  button7.hide();
  button6.hide();
  Slider1.hide();
  Slider2.hide();
  Slider3.hide();
  clear();

  //sets the page up
  blanket();

  //test page
  fill(250,250,150);
  rect(0,200,windowWidth,windowHeight);

  //computing
  fill(0,0,0);
  textSize(14.5);
  image(img3, windowWidth / 2,200,windowWidth /2,windowHeight);

  textSize(20);
  text("Cyclotrons and Computing",10,250);

  textSize(14);
  r = "           In March 1989 Tim Berners-Lee, a scientist working at CERN, submitted a proposal to develop a radical new way of linking and sharing information over the internet. The document was entitled Information Management: A Proposal. And so the web was born. The first website at CERN – and in the world – was dedicated to the World Wide Web project itself. Last April CERN initiated a project to restore the first website, and to bring back the spirit of that time through its technical innovation and the founding In principles of openness and freedom. 1993 CERN put the World Wide Web software in the public domain. CERN made the next release available with an open licence, as a more sure way to maximise its dissemination. Through these actions, making the software required to run a web server freely available, along with a basic browser and a library of code, the web was allowed to flourish. Beyond CERN's role in helping us understand the universe it was a great place to work in 1989, said Tim Berners-Lee. CERN was an early adopter of Internet protocols, and their support for a Royalty-Free Web has been a key to its widespread adoption today. Now Tim Berners-Lee, the World Wide Web Consortium (W3C) and the World Wide Web Foundation are launching a series of initiatives to mark the 25th of the original proposal. In addition, Berners-Lee and the Web Foundation are launching The web we want campaign to promote a global dialogue and change in public policy to ensure that the web remains an open, free, accessible medium – so that everyone on the planet can participate in the free flow of knowledge, ideas and creativity online."
  text(r,20,300,windowWidth/2 -20,windowHeight-100);

  textSize(10);
  text("Text taken from Cern",10,windowHeight+190);
}


function blanket() {

      links();
      clear();

      createCanvas(windowWidth, windowHeight+200);
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
      text("An in depth look at how a Cyclotron works", 10,70);

      button5 = createImg('logo.png');
        button5.size(75,75);
        button5.position(windowWidth * .9, 25);
        button5.mousePressed(home);
    }

    function home() {

      //page setup
      vid.hide();
      button6.hide();
      button7.hide();
      Slider1.hide();
      Slider2.hide();
      Slider3.hide();
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

      fill(255,255,255);
      textSize(40);
      text("Introduction",150,300);
      q = "         Cyclotrons are particle accelerators that accelerate subatomic particles to nearly the speed of light. But how do they do that and what do they have to do with computing?"
      textSize(15);
      text(q,20,325,windowWidth/2 -20,windowHeight -10);
    }


    function links () {
      noStroke();
      var col = color(255,255,255);
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

  //  plays or pauses the video depending on current state
  //site source
    function toggleVid() {
      if (playing) {
        vid.pause();
        button7.html('play');
      } else {
        vid.loop();
        button7.html('pause');
      }

      playing = !playing;
    }
