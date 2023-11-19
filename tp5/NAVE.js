class Nave {
  constructor(posx, posy, ancho) {
    this.posx = posx
      this.posy = posy
      this.ancho = ancho
      this.vel = 2;
    this.chocar = true;
    this. planeta = new Planeta();
      this.impactosNave = 0;
    this.meteorito = new Meteorito();
  }

  dibujo() {
    fill(250, 0, 0)
    circle(this.posx, this.posy, this.ancho);
    fill(150, 0, 0);
    circle(this.posx-this.ancho/2, this.posy+this.ancho/2, this.ancho/2);
    circle(this.posx+this.ancho/2, this.posy+this.ancho/2, this.ancho/2);
  }

 detectarImpactoMeteorito(meteorito) {
    if (this.choque(this.meteorito.posx, this.meteorito.posy, this.meteorito.ancho)) {
      this.impactosNave++; 
      return true;
    }
    return false;
  }
  movimiento() {
    if (this.chocar) {
      this.posy -= this.vel;
      if (this.estaSobrePlaneta()) {
        this.detenerNave();
      }
    }
  }
   
choque(x,y,d, px, py, nd){
  let distan = dist(x,y,px,py); 
  return distan<d/2+nd/2
   
}

 movIzquierda() {
    this.posx -= 10
  }
  movDerecha() {
    this.posx += 10
  }
  vida() {
    this.chocar=false ;
  }
 estaSobrePlaneta() {
    return this.posy <= this.planeta.posy + this.planeta.ancho / 2; 
  }
   detenerNave() {
    this.chocar = false; 
  }

}
