//Alexander Peñaranda Diaz-Lejago:94752/0
//cuento elejido: "los desterrados"
//https://youtu.be/dfKt9OAmiFw

int cant = 12;
PImage [] ima = new PImage [cant];
String [] textos = {"Los desterrados\npor Ray Bradbury",
  "Tres brujas reunidas preparan una pocion y observan preocupadas una bola de cristas que les da la poscibilidad de observar mas alla de sus hojos... ",
  "... en la esfera se observa una tripulacion humana dentro de una nave llendo a un destino escogido, Marte.Los tripulantes de la nave estan preocupados por llegar a su destino, no saben que les espera, ellos solo tienen una mision, ir a los desconocido ",
  "ademas  experiemntaron extraños sueños que cada vez los hacian dudar de si realmente vale la pena cumplir con esa mision pero sino lo hacen que les espera cuando vuelvan a la tierra... ",
  "...la tierra se convirtio en un infierno para los literarios, ya casi no queda nada para leer.\nTodo comenzo cuando prohibieron los libros en la tierra...  ",
  "...por esta razon los ultimos ejemplares de libros estan en la nave\ny la mision es destruir los ultimos libros que quedan para siempre ",
  "gracias a la esfera las brujas saben que les queda poco tiempo van con los escritores exiliados en marte para informarlos sobre la nave y discuten que accion van a tomar",
  "mientras los escritores discutes sobre lo que van a hacer la tripulacion espacial llega a Marte... ",
  "... los escritores desaparecen y los libros terminan de quemarce. ",
  "deciden pelear y ademas en el cielo ven a la nave pero con la decision tomada ahora van a luchar por sobrevivir y recuperar sus libros ",
  "la nave cabia de rumbo por el miedo que les generaba las pesadillas y dejan los libros en la luna para no destruirlos",
  "por el miedo a las pesadillas la tripulacion vuelve a la tierra y quema los libros en la tierra.",
  "libro:EL HOMBRE ILUSTRADO de Ray Bradbury\n creador y guionado by Alexander Peñaranda "};
float [] tex = new float[textos.length];
int fond = 0;

void setup() {
  size (600, 600);
  for (int i=0; i<cant; i++) {
    ima[i] = loadImage("ima"+i+".png");
  }
  for (int i=0; i<tex.length; i++) {
    tex[i] = textWidth(textos[i]);
  }
}
void draw() {
  if (fond ==0) {
    image (ima[0], 0, 0, 600, 600);
    firstbotom();
    fondito(100, 200, 400, 200);
    fill(0);
    textSize(50);
    text(textos[0], 100, 100);
    boton(450, 500, 100, 50, "avanzar");
  } else if (fond == 1) {
    image (ima[1], 0, 0, 600, 600);
    fondito(50, 200, 550, 100);
    fill(0);
    text(textos[1], 50, 50, 550, 550);
    boton(width/2-50, 500, 100, 50, "siguiente");
  } else if (fond== 2) {
    image (ima[2], 0, 0, 600, 600);
    fondito(50, 200, 555, 130);
    fill(0);
    text(textos[2], 50, 50, 550, 550);
    boton(width/2-50, 500, 100, 50, "siguiente");
  } else if (fond == 3) {
    image (ima[3], 0, 0, 600, 600);
    fondito(50, 200, 560, 100);
    fill(0);
    text(textos[3], 45, 50, 550, 550);
    boton(width/2-50, 500, 100, 50, "siguiente");
  } else if (fond == 4) {
    image (ima[4], 0, 0, 600, 600);
    fondito(50, 200, 560, 100);
    fill( 0);
    text(textos[4], 50, 50, 550, 550);
    boton(width/2-50, 500, 100, 50, "siguiente");
  } else if (fond == 5) {
    image (ima[5], 0, 0, 600, 600);
    fondito(50, 200, 550, 100);
    fill( 0);
    text(textos[5], 40, 50, 560, 550);
    boton(width/2-50, 500, 100, 50, "pero...");
    boton(70, 500, 100, 50, "pero...");
    boton(500-50, 500, 100, 50, "pero...");
  } else if (fond == 6) {
    image (ima[6], 0, 0, 600, 600);
    fondito(50, 200, 560, 100);
    fill(0);
    text(textos[6], 40, 50, 560, 550);
    boton(450, 500, 100, 50, "pero...");
    boton(70, 500, 100, 50, "pero...");
  } else if (fond == 7) {
    image (ima[7], 0, 0, 600, 600);
    fondito(50, 200, 550, 100);
    fill(0);
    text(textos[7], 50, 50, 560, 550);
    boton(width/2-50, 500, 100, 50, "siguiente");
  } else if (fond == 8) {
    image (ima[8], 0, 0, 600, 600);
    fondito(50, 200, 550, 100);
    fill(0);
    text(textos[8], 40, 80, 560, 550);
    boton(width/2-50, 500, 100, 50, "FIN");
  } else if (fond == 9) {
    image (ima[9], 0, 0, 600, 600);
    fondito(50, 200, 550, 100);
    fill(0);
    text(textos[9], 50, 50, 560, 550);
    boton(width/2-50, 500, 150, 50, "FIN");
  } else if (fond == 10) {
    image (ima[10], 0, 0, 600, 600);
    fondito(50, 200, 560, 60);
    fill(0);
    text(textos[10], 40, 50, 550, 550);
    boton(width/2-50, 500, 150, 50, "volver a inicio");
  } else if (fond == 11) {
    image (ima[11], 0, 0, 600, 600);
    fondito(50, 200, 550, 100);
    fill(0);
    text(textos[10], 50, 50, 550, 550);
    boton(width/2-50, 500, 150, 50, "FIN");
  } else if (fond== 13) {
    image (ima[8], 0, 0, 600, 600);
    fill(255);
    text(textos[11], 40, 100, 560, 550);
    boton(width/2-50, 500, 150, 50, "FIN");
  }else if (fond == 14){
  image (ima[0], 0, 0, 600, 600);
  fondito(110, 310, 400, 100);
  fill(0);
  text(textos[12],width/6,height/4);
  boton(width/2-50, 500, 150, 50, "volver a inicio");
  }
}
void mousePressed() {
  if (botom(450, 500, 100, 50)&& fond == 0) {
    fond = 1;
  } else if (botom(width/2-50, 500, 150, 50)&& fond == 0) {
    fond = 14;
  }else if (botom(width/2-50, 500, 150, 50)&& fond==14){
    fond = 0;
  } else if (botom(width/2-50, 500, 100, 50)&& fond == 1) {
    fond = 2;
  } else if (botom(width/2-50, 500, 100, 50)&& fond == 2) {
    fond = 3;
  } else if (botom(width/2-50, 500, 100, 50)&& fond == 3) {
    fond = 4;
  } else if (botom(width/2-50, 500, 100, 50)&& fond == 4) {
    fond = 5;
  } else if (botom(width/2-50, 500, 100, 50)&& fond == 5) {
    fond = 6;
  } else if (botom(70, 500, 100, 50)&& fond==5) {
    fond = 11;
  } else if (botom(width/2-50, 500, 150, 50)&& fond ==11) {
    fond = 0;
  } else if (botom(500-50, 500, 100, 50)&& fond==5) {
    fond = 13;
  } else if (botom(width/2-50, 500, 150, 50)&& fond==13) {
    fond = 0;
  } else if (botom(70, 500, 100, 50)&& fond == 6) {
    fond = 7;
  } else if (botom(450, 500, 100, 50)&& fond ==6) {
    fond = 9;
  } else if (botom(width/2-50, 500, 150, 50)&& fond==9) {
    fond = 0;
  } else if (botom(width/2-50, 500, 100, 50)&& fond == 7) {
    fond = 8;
  } else if (botom(width/2-50, 500, 100, 50)&& fond == 8) {
    fond = 0;
  } else if (botom(width/2-50, 500, 100, 50)&& fond == 9) {
    fond = 0;
  }
}

boolean botom(int x, int y, float alto, int ancho) {
  if (mouseX>x&& mouseX<x+alto && mouseY>y&& mouseY<y+ancho) {
    return true;
  } else {
    return false;
  }
}
void boton(int x, int y, int ancho, int alto, String text) {
  if (botom(x, y, ancho, alto)) {
    fill(255);
  } else {
    fill(150);
  }
  rect(x, y, ancho, alto, alto/4);
  fill(0);
  textSize(20);
  text(text, x, y+alto/2);
}

void fondito(int x, int y, int alto, int ancho) {
  float lug = map(x, 0, width, x-x/2, y-y /2+x);
  float lugg = map(y, 0, height, x-x, y-x);
  noStroke();
  ;
  fill(200, 200, 200, 150);
  rect(lug, lugg, alto, ancho);
}
