function update_flights(x,y) {
	return x+2;
}

// preload data
function preload() {
  //data = loadTable('your_data_here.csv','csv','header');
  data = [[540,270],[890,1100],[54,94],[1345,800],[1070,1070]];
  img = loadImage('map.png');
}

function setup() { 
  createCanvas(1600, 1600);

  background(255);
  stroke("#000000");
  strokeWeight(1);
  textSize(14);
  
  frameRate(1);
}

function draw() {

  //go to airspace
  translate(30, 20);

  /******************************
  *     draw backdrop           *
  ******************************/  
  
  //draw airspace as image
  image(img, 0, 0);
  
  //draw airspace as primitives dynamically:
  
  //polygon example:
  let points = [67, 55, 87, 67, 106, 79, 120, 92, 64, 76, 67, 55];
  stroke("#20808080");
  fill("#20404080");
  beginShape();
  for (let a = 0; a < points.length; a += 2) {
    let sx = points[a];
    let sy = points[a+1];
    vertex(sx, sy);
  }
  endShape(CLOSE);
  
  line(120, 92, 85, 175);
  
  //rect(0, 0, 500, 470);

  /******************************
  *        draw planes          *
  ******************************/

  stroke("#4080FF");
  strokeWeight(2);
  
  fill("#ffffff");
  stroke("#ffffff80");

  for (a = 0; a < data.length; a++) {
  	data[a][0] = update_flights(data[a][0], data[a][1]);
  	ellipse(data[a][0], data[a][1], 8, 8);
	text('ASA00' + a, data[a][0]-30, data[a][1]-16);
	line(data[a][0], data[a][1]-16, data[a][0], data[a][1])
  }
}

function mousePressed() {
}

function keyPressed() {
	if (keyCode === ENTER) {}
}
