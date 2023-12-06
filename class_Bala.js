class Bala{
  constructor(Bx, By, diam){
    this.Bx = Bx;
    this.By = By;
    this.diam = diam; 
    this.disparada = false;
  }
  
  dibujarBala(){
    if(this.disparada){
      fill(255, 255, 0);
      circle(this.Bx, this.By, this.diam);
      this.mover();
    }
  }
  mover(){
    this.By-=5;
  }  
  disparar(){
    this.disparada = true;
  }
}
