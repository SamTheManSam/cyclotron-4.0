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
var silder;
var val;

function preload() {
  img = loadImage("Cyclotron.jpg");
  img2 = loadImage("logo.png");
  img3 = loadImage("cern.jpg");
  img4 = loadImage("Homepage.jpg");
  vid = createVideo('videotron.mp4');
  //play button parameters
  button7 = createButton('play');
  button7.hide();

  button6 = createButton('Go!');
    button6.hide();

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
  clear();
  blanket();

  //red page
  fill(250,100,100);
  rect(0,200,windowWidth,windowHeight);

  //"What is a cyclotron?" explanation
  textSize(15);
  fill(0,255);
  text("What is a cyclotron?", 10, 250);
  text("How does it work?",150,250);

//video parameters
  vid.position(100,200);
  vid.size(650,550);

  button7 = createButton('play');
button7.mousePressed(toggleVid);
button7.position(650,700);
}

function theory_of_operation() {

  //setup
blanket();
vid.hide();
button7.hide();
button6.hide();

  //green page
  fill(150,250,170);
  rect(0,200,windowWidth,windowHeight);

    //image explaner
    image(img, windowWidth / 2,200,windowWidth / 2,windowHeight);

    fill(0,0,0);
textSize(20);
text("What is a particle accelerator?",10,windowHeight / 2.25);

textSize(12.5);
text("A particle accelerator is a machine that accelerates elementary particles,",10,windowHeight / 2.25+15);
text("such as electrons or protons, to very high energies. On a basic level,",10,windowHeight / 2.25+26);
text("particle accelerators produce beams of charged particles that can ",10,windowHeight / 2.25+37);
text("be used for a variety of research purposes. There are two basic types of ",10,windowHeight / 2.25+48);
text("particle accelerators: linear accelerators and circular accelerators. ",10,windowHeight / 2.25+59);
text("Linear accelerators propel particles along a linear, or straight, beam line. ",10,windowHeight / 2.25+70);
text("Circular accelerators propel particles around a circular track.  ",10,windowHeight / 2.25+81);
text("Linear accelerators are used for fixed-target experiments, whereas circular ",10,windowHeight / 2.25+92);
text("accelerators can be used for both colliding beam and fixed target ",10,windowHeight / 2.25+103);
text("experiments.",10,windowHeight / 2.25+114);

textSize(20);
text("How does a particle accelerator work?",10,windowHeight / 2.25+150);

textSize(12.5);
text("Particle accelerators use electric fields to speed up and increase the ",10,windowHeight / 2.25);
text("energy of a beam of particles, which are steered and focused by ",10,windowHeight / 2.25);
text("magnetic fields. The particle source provides the particles, such as ",10,windowHeight / 2.25);
text("protons or electrons, that are to be accelerated. The beam of particles ",10,windowHeight / 2.25);
text("travels inside a vacuum in the metal beam pipe. The vacuum is crucial ",10,windowHeight / 2.25);
text("to maintaining an air and dust free environment for the beam of particles ",10,windowHeight / 2.25);
text("to travel unobstructed. Electromagnets steer and focus the beam of ",10,windowHeight / 2.25);
text("particles while it travels through the vacuum tube.",10,windowHeight / 2.25);
text("Electric fields spaced around the accelerator switch from positive to ",10,windowHeight / 2.25);
text("negative at a given frequency, creating radio waves that accelerate ",10,windowHeight / 2.25);
text("particles in bunches. Particles can be directed at a fixed target, such as ",10,windowHeight / 2.25);
text("a thin piece of metal foil, or two beams of particles can be collided. ",10,windowHeight / 2.25);
text("Particle detectors record and reveal the particles and radiation that are ",10,windowHeight / 2.25);
text("produced by the collision between a beam of particles and the target.",10,windowHeight / 2.25);

  }

    /* My eventual goal with this page is to make an inmation with a couple
    sliders that will control variables, and when the user is done adjusting the
    variables, they can press a "play" button and have an inmation of the particle's
    motion... perhaps I can make it a game where the user must set correct
    variables to make the particle accelerator work correctly.

    */


function animation() {

  //setup
  vid.hide();
  button7.hide();
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
    button6.position(750, 550);
    button6.mousePressed(cyclogo);
    fill(0,0,0);
    textSize(15);
    text("Play with the program and see how to make it move fastest!",200,250);
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
    fill(0,0,0);
    text("Play with the program and see how to make it move fastest!",200,250);
}

function computing() {

  vid.hide();
  button7.hide();
  button6.hide();
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
  text("In March 1989 Tim Berners-Lee, a scientist working at CERN, submitted",10,250);
  text("a proposal to develop a radical new way of linking and sharing",10,250+15);
  text(" information over the internet. The document was entitled Information",10,250+30);
  text(" Management: A Proposal. And so the web was born. The first website",10,250+45);
  text("at CERN – and in the world – was dedicated to the World Wide Web",10,250+60);
  text("project itself. Last April CERN initiated a project to restore the first",10,250+75);
  text("website, and to bring back the spirit of that time through its technical",10,250+90);
  text("innovation and the founding In principles of openness and freedom.",10,250+105);
  text("1993 CERN put the World Wide Web software in the public domain.",10,250+120);
  text("CERN made the next release available with an open licence, as a more",10,250+135);
  text("sure way to maximise its dissemination. Through these actions, making",10,250+150);
  text("the software required to run a web server freely available, along with a",10,250+165);
  text("basic browser and a library of code, the web was allowed to flourish.,",10,250+180);
  text("Beyond CERN's role in helping us understand the universe it was a",10,250+195);
  text("great place to work in 1989, said Tim Berners-Lee. CERN was an early",10,250+210);
  text("adopter of Internet protocols, and their support for a Royalty-Free Web.",10,250+225);
  text("has been a key to its widespread adoption today. Now Tim Berners-Lee,",10,250+240);
  text("the World Wide Web Consortium (W3C) and the World Wide Web ",10,250+255);
  text("Foundation are launching a series of initiatives to mark the 25th",10,250+270);
  text(" of the original proposal. In addition, Berners-Lee and the Web",10,250+285);
  text("Foundation are launching The web we want campaign to promote a",10,250+300);
  text("global dialogue and change in public policy to ensure that the web remains",10,250+315);
  text("an open, free, accessible medium – so that everyone   on the planet",10,250+330);
  text(" can participate in the free flow of knowledge, ideas and creativity online.",10,250+345);
  textSize(10)
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

      vid.hide();
      button6.hide();
      button7.hide();
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
