class Nave {
  constructor(posx, posy, ancho, alto) {
    this.posx = posx
      this.posy = posy
      this.ancho = ancho
      this.alto = alto
      this.vel = 2;
    this.chocar = true;
  }

  dibujo() {
    fill(250, 0, 0)
      rect(this.posx, this.posy, this.ancho, this.alto);
  }

  movimiento() {
    this.posy -= this.vel;
    this.chocar = true;

  }
 movIzquierda() {
    this.posx -= 10
  }
  movDerecha() {
    this.posx += 10
  }
  vida() {
  }
}
