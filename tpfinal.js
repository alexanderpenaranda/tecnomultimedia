let play; 
function setup() {
  createCanvas(600, 600);
  play = new Principal();
}

function draw() {
  play.dibujar();
}
function mousePressed() {
  play.accionarBotones();
}
function keyPressed(){
  play.crearteclas(keyCode);
}
