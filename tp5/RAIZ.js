class raiz {
  constructor() {
    this.crearMeteorito();
    this.crearNave();
    this.crearPlaneta();
  }

  dibujar() {

    for (let i=0; i<6; i++) {
      this.meteorito[i].dibujo();
      this.meteorito[i].movimiento();
    }
    for (let i=0; i<2; i++) {
      this.planeta[i].dibujo();
    }
    this.nave.dibujo();
    this.nave.movimiento();
    this.impacto();
   
  }

  crearMeteorito() {
    this.meteorito = []
      for (let i=0; i<6; i++) {
      this.meteorito[i] = new Meteorito(i*75+10, 10, 25);
    }
  }
  crearNave() {
    this.nave = new Nave(width/2-10, 800, 20, 20);
  }

  crearPlaneta() {
    this.planeta = []
      for (let i=0; i<2; i++) {
      this.planeta[i] = new Planeta(width/2, i*700+25, 100);
    }
  }


  mueveNave(tecla) {
    this.ap = tecla
      if (this.ap === RIGHT_ARROW ) {
      this.nave.movDerecha();
    } else if (this.ap === LEFT_ARROW ) {
      this.nave.movIzquierda();
    }
  }
   ganoNave() {
  }
  reinicio(){
    
  }
  /*impacto() {
    for (let i=0; i<6; i++) {
      if (this.choca(this.meteorito[i].posx, this.meteorito[i].posy, this.meteorito[i].ancho, this.nave.posx, this.nave.posy, this.nave.ancho, this.nave.alto) && this.nave.chocar) {
        this.nave.chocar = false;
      }
    }
  }
  choca(x, y, meteoritoAncho, posx, posy, naveAncho, Alto) {
    //return x+meteoritoAncho >posx && x<posx+naveAncho && y+meteoritoAncho>posy && y<posy+Alto
    //return x+meteoritoAncho/2>posx+naveAncho && x-meteoritoAncho<posx+naveAncho && y+meteoritoAncho/2>posy && y<posy+Alto
    return x+meteoritoAncho/2 > posx && x+meteoritoAncho/2< posx+naveAncho && y+meterotitoAncho> posy && y< posy+Alto;
  }*/
}
