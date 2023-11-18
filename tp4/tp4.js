//Alexander Peñaranda Diaz 
//legajo: 94752/0
// video 



let CX, CY, CA, CL;               // CAÑON //
let JX, JY, JA, JL;                // JUGADOR //
let BX, BY, BD, BVEL;             // BALA //
let disparada = false;
let puntos = 0;
let sinImpacto = 0;
let juego = false
let pantalla = 0;

 
function setup() {
  createCanvas(600, 400);
           //cañon//
  CX = 450;
  CY = 350;
  CA = 100;
  CL = 25;
           //jugador//
  JX = 100; 
  JY = 300;
  JA = 25;
  JL = 100;
           //bala//
  BX = 500;
  BY = 350;
  BD = CL;
  BVEL = random(2, 5);
}

function draw() {
   rectMode(CORNER);
   if (pantalla === 0) {                     //pantalla de inicio //
      background(200);
      textSize(24);
  fill(0);
  text("¡Bienvenido al juego!", width / 2 - 120, height / 2 - 50);
  fill(150);
  rectMode(CENTER);
 rect(width / 2, height / 2 + 80, 150, 50);

  fill(0);
  textSize(20);
  text("Comenzar Juego", width / 2 - 80, height / 2 + 85);
  if (mouseIsPressed) {
     if (botonPress(width / 2 - 75, height / 2 + 50, 150, 50))  {
    pantalla = 1; 
  }
  }
   }else if (pantalla === 1){                     //pantalla del juego //
background(200);
  CANON(CX, CY, CA, CL);
  JUGA(JX, JY, JA, JL);

  if (disparada && BX > 0) {
    BX -= BVEL;
  } else {
    BX = width - CA;
    BVEL = random(1.2, 4.6);
    disparada = true;
  }

  BALA(BX, BY + BD / 2, BD);
  if (BX <= 0) {
    disparada = false;
    BX = width - CA;
    sinImpacto++;
  }

if (keyIsPressed && impacto(BX, BY + BD / 2, JX, JY, JA, JL)) {
    disparada = false;
    BX = width - CA;
    puntos++;
}
      
  fill(0);
  textSize(20);
  text("Puntos: " + puntos, 10, 30);
  text("Veces sin impacto: " + sinImpacto, 10, 60);
if (puntos >= 5) {
    pantalla = 2; 
  } else if (sinImpacto >= 5) {
    pantalla = 3; 
  }
   }else if(pantalla === 2){                     //pantalla de ganar con boton de reinicio  //
   background(220);
  if (puntos >= 5) {
    text("¡GANASTE!", width / 2-50, height / 2-50);
    if (mouseIsPressed && botonPress(width / 2 - 50, height / 2 - 25, 100, 50) &&(puntos >= 5 || sinImpacto >= 5)) {
      juego = true;
      pantalla = 0;
    }
  }
    fill(200);
    rect(width/2- 50, height/2 -25, 100, 50);
    fill(0);
    textSize(20);
    text("Reiniciar", width / 2 - 35, height / 2 + 5);
   if (juego) {
    reiniciarBala();
  }
   }else if (pantalla === 3){                     //pantalla de perder con boton de reinicio  //
      background(220);
 if (sinImpacto >= 5) {
   text("¡PERDISTE!",  width / 2-50, height / 2-50);
    if (mouseIsPressed && botonPress(width / 2 - 50, height / 2 - 25, 100, 50) &&(puntos >= 5 || sinImpacto >= 5)) {
      juego = true;
      pantalla = 0;
    }
  }
     fill(200);
    rect(width/2- 50, height/2 -25, 100, 50);
    fill(0);
    textSize(20);
    text("Reiniciar", width / 2 - 35, height / 2 + 5);
 if (juego) {
    reiniciarBala();
  }
}
}
function mousePressed() {
  if (pantalla === 0 && botonPress(400, 400, 80, 50)) {
    pantalla = 1; 
  } else if ((pantalla === 2 || pantalla === 3) && botonPress(400, 400, 80, 50)) {
   if (!juego){
    pantalla = 0; 
  }
  }
}
function botonPress(bx, by, ancho, alto) {
  return mouseX > bx && mouseX < bx + ancho && mouseY > by && mouseY < by + alto;
}
function reiniciarBala() {
  BX = 500;
  BY = 350;
  BVEL = random(2, 5);
  puntos = 0;
  sinImpacto = 0;
  juego = false;
}

function CANON(X, Y, L, A) {
  fill(150);
  rect(X, Y, L, A);
  circle(X + L, Y + A, L /2);
}

function BALA(X, Y, BD) {
  circle(X, Y, BD);
}

function JUGA(X, Y, L, A) {
  fill(150);
  rect(X, Y, L, A);
}

function impacto(x, y, px, py, ancho, alto) {
  return x > px && x < px + ancho && y > py && y < py + alto;
}
