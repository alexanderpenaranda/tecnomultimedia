class Meteorito {
  constructor(posx, posy, ancho) {
    this.posx = posx;
    this.posy = posy;
    this.vel = random(0.5, 4.6);
    this.ancho = ancho;
  }
  dibujo() {
    fill(150);
    circle(this.posx, this.posy, this.ancho);
  }

  movimiento() {
  this.posy += this.vel; 
  if(this.posy >height){
    this.posy = -this.ancho;
  }
  }

  vida () {
  }
}
