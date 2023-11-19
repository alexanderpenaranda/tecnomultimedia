class Meteorito {
  constructor(posx, posy, ancho) {
    this.posx = posx;
    this.posy = posy;
    this.vel = random(0.5, 4.6);
    this.ancho = ancho;
    this.chocar = true;
  }
  dibujo() {
    fill(150);
    circle(this.posx, this.posy, this.ancho);
  }

  movimiento() {
  this.posy += this.vel; 
  if(this.posy >height){
    this.posy = -this.ancho;
    this.chocar = true;
  }
  }
  detectarImpacto(nave) {
    if (this.chocar && this.choque(nave.posx, nave.posy, nave.ancho, this.posx, this.posy, this.ancho)) {
      this.chocar = false; // Indicar que ya hubo un impacto con este meteorito
      return true; // Indicar que hubo un impacto
    }
    return false; // Indicar que no hubo impacto
  }
  choque(naveX, naveY, naveAncho) {
    let distan = dist(this.posx, this.posy, naveX, naveY); 
    return distan < this.ancho / 2 + naveAncho / 2;
  }

  vida () {
  }
}
