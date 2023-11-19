//Alexander Peñaranda Diaz 
//legajo : 94752/0
let miRaiz

  function setup() {
  createCanvas(400, 800);
  miRaiz = new raiz()
}


function draw() {
  background(0);
  miRaiz.dibujar();
  
}
function keyPressed() {
  miRaiz.keyPressed();
}
function mousePressed(){
  miRaiz.mousePressed()
}
