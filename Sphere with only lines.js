function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(50, 225, 225);

  line(200, 0, 200, 400); //y-Axis

  //The set of lines that are highest & most inner.
  line(200, 0, 175, 150); //topLeft
  line(200, 0, 225, 150); //topRight
  line(200, 300, 175, 150); //bottomLeft
  line(200, 300, 225, 150); //bottomRight

  //bottomLeft Lines
  line(200, 275, 150, 150);
  line(200, 250, 125, 150);
  line(200, 225, 100, 150);
  line(200, 200, 75, 150);
  line(200, 175, 50, 150);

  //TopLeft Lines
  line(200, 25, 150, 150);
  line(200, 50, 125, 150);
  line(200, 75, 100, 150);
  line(200, 100, 75, 150);
  line(200, 125, 50, 150);

  //topRight lines
  line(200, 25, 250, 150);
  line(200, 50, 275, 150);
  line(200, 75, 300, 150);
  line(200, 100, 325, 150);
  line(200, 125, 350, 150);

  //bottomRight lines
  line(200, 275, 250, 150);
  line(200, 250, 275, 150);
  line(200, 225, 300, 150);
  line(200, 200, 325, 150);
  line(200, 175, 350, 150);

  line(0, 150, 400, 150); //x-Axis
}
