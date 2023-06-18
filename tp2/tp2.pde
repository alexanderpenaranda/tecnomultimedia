//Alexander Peñaranda Diaz, legajo; 94752/0
//https://youtu.be/-Sb_M3f-Gjs

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
  // background(234, 232, 211);
}

void draw() {
  background(234, 232, 211);
  image(img, 0, 0, 400, 400);
    

  for(int f =0; f<cant; f++){
    for(int g=0; g<cant; g++){
  nuevaCuadra((f*tam)+(tam*2)+(tam/2), g*tam+(tam/2), 210, 12 );
  miCuadra((f*tam)+(tam*2)+(tam/2), g*tam+(tam/2), 100, 8);
  cubito();
    }
  }
  text("presiona cualquier tecla o clickea en cualquier \n parte de la pantalla para cambiar de color \npresiona la barra espaciadora para volver al inicio ",100,350 );
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
void nuevaCuadra(int x, int y, int ancho, int cant ) {
  for (int X=0; X<cant; X++) {
    push();
    translate(x, y);
    
    rectMode(CENTER);

    float tami = map(X, 0, cant-1, ancho, cant/cant);
    float opacidad = map(X, 0, cant-1, cant/cant, ancho);
    noStroke();
    fill(nuevaCuadraColor, opacidad);
    rect(cant-cant, cant-cant, tami, tami);
    pop();
  }
}

void miCuadra (int x, int y, int ancho, int cant) {
  for (int X=0; X<cant; X++) {
    push();
    translate(x, y);
    rectMode(CENTER);

    float tami = map(X, cant-cant, cant-1, ancho, cant);
    float opacidad = map(X, cant-cant, cant-1, cant/cant, ancho);
    noStroke();
    fill(miCuadraColor, opacidad);
    rect(cant-cant, cant-cant, tami, tami);
    pop();
  }
}
void cubito() {
  noStroke();
  fill(234, 232, 211);
  rectMode(CENTER);
  rect(600, 200, 40, 40);
}



  
