class Juego {
  constructor(){
//marte
this.marte = new Marte (width/2, 10, 200, 100);
// nave
this.crearNave();
//asteroides
this.crearAsteroides();
// 
this.plase= 0;
  }
  
  display(){
    if(this.plase === 0){
        for(let i=0; i < 10; i++){
   if(this.chocan(this.cohete.cx, this.cohete.cy, this.cohete.cancho, this.astero[i].x, this.astero[i].y, this.astero[i].tam)){
       background(255, 0, 0); // PERDER 
    //this.astero[i] = 0;
     this.impacto = false;
     this.plase = 19;
   }
     this.astero[i].dibujar();
  }
  this.cohete.dibujar();
  this.DisparoAsteroides();
  this.marte.dibujar();
  if(this.LlegoaMarte(this.cohete.cx, this.cohete.cy, this.cohete.cancho, this.marte.Mx, this.marte.My, this.marte.tamaño)){
    background(255); // GANAR
    this.impacto= false;
    this.plase = 9;
   }
  }
 }

chocan(x, y, tam, cx, cy, cancho){ 
  let impacto = dist(x, y, tam, cx, cy, cancho); 
   return impacto<tam/2+cancho-tam/2;
}
LlegoaMarte(Mx, My, tamaño, cx, cy, cancho){ 
  let llegamos = dist(Mx, My, cx, cy); 
   return llegamos<tamaño/2+cancho/2;
}  

 DisparoAsteroides(){  
    if(this.cohete.haDisparadoBala){
      for(let i=0; i <10; i++){
        this.astero[i].haTocadoLaBala(this.cohete.bala);
      } 
    }
  }
  
 teclaPresionada(tecla){ // teclas del cohete y de la bala 
    this.tec = tecla;
    if(this.tec === LEFT_ARROW && this.cohete.cx > this.cohete.cancho/2){ 
      this.cohete.moverIzquierda();
    }else if(this.tec === RIGHT_ARROW && this.cohete.cx < width-this.cohete.cancho/2){
      this.cohete.moverDerecha();
    }else if(this.tec === UP_ARROW && this.cohete.cy > this.cohete.cancho/2){ 
      this.cohete.moverArriba(); 
     }else if(this.tec === DOWN_ARROW){// NO FUNCIONAAAAA
      this.cohete.moverAbajo();  
    }else if(this.tec === 87){ // tecla w 
      this.cohete.dispararBala();             
    }
  }  
  
  crearAsteroides(){
    this.astero = [];
    for(let i=0; i < 10; i++){
      this.astero[i] = new Asteroides(10+i*50, 0, random(35, 35)); 
      this.choque = 0;   
    } 
  } 
  crearNave(){
    this.cohete = new Cohete(width/8, 450, 50, 20);

   }
 
 Plase(){
  return this.plase;
}
   
 reiniciarJuego(){
   this.plase = 0;
   this.cohete = [];
    this.astero = [];
    this.crearNave();
    this.crearAsteroides();
 }
}
