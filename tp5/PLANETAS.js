class Planeta {
  constructor(posx,posy, ancho) {
    this.posx = posx;
       this.posy = posy;
       this.ancho = ancho
  }
  
  dibujo() {
    fill(250);
    circle(this.posx,this.posy,this.ancho);
  }
}
