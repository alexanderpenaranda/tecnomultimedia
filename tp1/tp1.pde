int estado;
int segundos;
boolean arranca;
PImage img1;
PImage img2;
PImage img3;
int posx1, posx2, posy3;
int mX1, mX2;
int mY1, mY2;
PFont b;

void setup() {
  size (640, 480);
  img1 = loadImage ("11.jpeg");
  img2= loadImage ("8.jpeg");
  img3= loadImage ("4.jpeg");
  b = loadFont("pri.vlw");
  textFont (b, 30);
  textAlign(CENTER, CENTER);
  estado = 0;
  segundos = 0;
  posx1 = width;
  posx2 = -550;
  posy3 = 500;
  mX1 = width/2;
  mX2 = 150;
  mY1 = height/2;
  mY2 = 150;
}

void draw () {
  background (255, 165, 51);
  if (arranca == true) {
    if (frameCount%60==0) {
      segundos ++;
    }
  }
  if (estado == 0) {
    image(img1, width/3, 20, 400, 300 );
    image (img2, width/5, 20, 400, 300);
    image (img3, width/19, 20, 400, 300);
    rectMode (CORNER);
    noStroke ();
    fill(75, 157, 82);
    rect (20, 345, 200, 35);
    fill(54, 86, 234);
    rect(20, 380, 600, 90);
    fill(255, 255, 255, 150);
    square(0, 0, 640);
    textAlign(CENTER);
    fill(0);
    text("Presione la pantalla para reproducir", width/2, height/2);
  }
  if (estado ==1) {
    image (img2, width/5, 20, 400, 300);
    image (img3, width/19, 20, 400, 300);
    fill(255, 255, 255, 150);
    rect (33, width/19-13, 400, 300);
    image(img1, width/3, 20, 400, 300 );
    noStroke ();
    fill(75, 157, 82);
    rect (20, 345, 200, 35);
    textAlign(CORNER, CORNER);
    textSize(30);
    fill(0);
    text ("BARILOCHE", 30, 370);
    fill(54, 86, 234);
    rect(20, 378, 600, 95);
    fill(0);
    text("San Carlos Bariloche uno de los lugares más\n visitados de Argentina  esta ubicada en  \n una provincia de  Rio negro ", posx1, 402);
    if (posx1 > 25) {
      posx1 = posx1-4;
    }
  }
  if (estado == 2) {
    image(img1, width/3, 20, 400, 300 );
    image (img3, width/19, 20, 400, 300);
    fill(255, 255, 255, 150);
    rect (33, width/19-13, 580, 300);
    image (img2, width/5, 20, 400, 300);
    noStroke ();
    fill(75, 157, 82);
    rect (20, 345, 200, 35);
    textAlign(CORNER, CORNER);
    fill(0);
    text ("BARILOCHE", 30, 370);
    fill(54, 86, 234);
    rect(20, 378, 600, 90);
    fill(0);
    text("Cuenta con una gran diversidad de puntos\n turisticos como el Hotel llao llao ", posx2, 410);
    if (posx2 < 25) {
      posx2 = posx2+4;
    }
  }
  if (estado == 3) {
    image(img1, width/3, 20, 400, 300 );
    image (img2, width/5, 20, 400, 300);
    fill(255, 255, 255, 150);
    rect (33, width/19-13, 580, 300);
    image (img3, width/19, 20, 400, 300);
    noStroke ();
    fill(75, 157, 82);
    rect (20, 345, 200, 35);
    textAlign(CORNER, CORNER);
    fill(0);
    text ("BARILOCHE", 30, 370);
    fill(54, 86, 234);
    rect(20, 378, 600, 90);
    fill(0);
    text("Además de increibles lagos de color\n turquesa como la isla corazon que esta\n rodeada decolor verde y azul   ", 25, posy3);
    if (posy3 > 400 ) {
      posy3 = posy3-4;
    }
  }
  if (estado==4) {
    image(img1, width/3, 20, 400, 300 );
    image (img2, width/5, 20, 400, 300);
    image (img3, width/19, 20, 400, 300);
    noStroke ();
    fill(75, 157, 82);
    rect (20, 345, 200, 35);
    fill(54, 86, 234);
    rect(20, 378, 600, 90);
    fill(255, 255, 255, 200);
    square(0, 0, 640);
    fill(130);
    rectMode(CENTER);
    rect(mX1, mY1, mX2, mX2 );
    rectMode (CORNER);
  }
  if (segundos == 0) {
    estado = 0;
  } else if (segundos>=1 && segundos <= 2) {
    estado = 1;
  } else if (segundos >= 7 && segundos <= 11) {
    estado = 2;
  } else if (segundos>=11 && segundos<= 14) {
    estado = 3;
  } else if (segundos>=14 && segundos<= 18) {
    estado = 4;
  }

  println(segundos);
}
void mousePressed () {
  arranca = true;
  if (mouseX >=mX1-mX2/2 && mouseX <=mX1+mX2/2 && mouseY>=mY1-mY2/2 && mouseY<=mY1+mX2/2) {
    estado = 0;
    segundos = 0;
    posx1 = width;
    posx2 = -500;
    posy3 = 500;
  }
}
