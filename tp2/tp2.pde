//Alexander Peñaranda Diaz - legajo 94752/0
// link
int cant = 2;
int tam;
PImage img;
color miCuadraColor;
color nuevaCuadraColor;
void setup() {
  size (800, 400);
  tam = (width/2)/cant;
  img = loadImage("tecno.jpeg");
  miCuadraColor = color(234, 232, 211);
  nuevaCuadraColor = color(21, 29, 70);
}

void draw() {
  background(234, 232, 211);
  //cubito();
  //image(img, 0, 0, 400, 400);
  //float cambio = color(234, 232, 211);
  for(int f =0; f<cant; f++){
    for(int g=0; g<cant; g++){
   float cambio = color(234, 232, 211);
  nuevaCuadra((f*tam)+(tam*2)+(tam/2), g*tam+(tam/2), 210, 12, cambio);
  miCuadra((f*tam)+(tam*2)+(tam/2), g*tam+(tam/2), 100, 8, cambio);
    }
  }
  cubito();
}

void nuevaCuadra(int x, int y, int ancho, int cant, float alterno ) {
  for (int X=0; X<cant; X++) {
    push();
    translate(x, y);
    //rotate(radians(rotar));
    rectMode(CENTER);

    float tami = map(X, 0, cant-1, ancho, cant/cant);
    float opacidad = map(X, 0, cant-1, cant/cant, ancho);
    //stroke(200);
    noStroke();
    strokeWeight(2);
    fill(nuevaCuadraColor, opacidad);
    rect(cant-cant, cant-cant, tami, tami);
    pop();
  }
}

void miCuadra (int x, int y, int ancho, int cant, float alterno) {
  for (int X=0; X<cant; X++) {
    push();
    translate(x, y);
    //rotate(radians(rotar));
    rectMode(CENTER);

    float tami = map(X, cant-cant, cant-1, ancho, cant);
    float opacidad = map(X, cant-cant, cant-1, cant/cant, ancho);
    //stroke(20);
    noStroke();
    //strokeWeight(2);
    fill(miCuadraColor, opacidad);
    rect(cant-cant, cant-cant, tami, tami);
    pop();
  }
}
void cubito() {
  noStroke();
  fill(0, 0, 0,0);
  rectMode(CENTER);
  rect(600, 200, 40, 40);
}
void mousePressed() {
  miCuadraColor = color(random(255), random(255), random(255));
}
void keyPressed() {
  nuevaCuadraColor = color(random(255), random(255), random(255));
  if (key==' ') {
    miCuadraColor = color(234, 232, 211);
    nuevaCuadraColor = color(21, 29, 70);
  }
}





  
