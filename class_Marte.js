class Marte {
   constructor(Mx, My, tamaño) {
    this.Mx = Mx;
    this.My = My;
    this.tamaño = tamaño;
   }
   dibujar(){
     fill(240, 80, 5);
   ellipse(this.Mx, this.My, this.tamaño);
    }
}
