class Cohete{
  constructor(cx, cy, cancho){
    this.cx = cx;
    this.cy = cy;
    this.cancho = cancho; 
    this.bala = new Bala();
    this.marte = new Marte(); 
    this.load();
  }
  
   load(){
    this.naveI = loadImage ("data/nave.png");
  }
  
  dibujar(){
    this.bala.dibujarBala();
    fill(0, 0, 200);
    image(this.naveI, this.cx, this.cy, this.cancho);
  }
  
  moverAbajo(){
    this.cy += 40;
  }
  moverArriba(){
    this.cy -= 40;
  }
  moverDerecha(){
    this.cx += 40;
  }
  moverIzquierda(){
    this.cx -= 40;
  }

dispararBala(){
    this.bala = new Bala(this.cx+20, this.cy, 30);
    this.bala.disparar();
  }
  haDisparadoBala(){
    return this.bala.disparada;
  }
}
