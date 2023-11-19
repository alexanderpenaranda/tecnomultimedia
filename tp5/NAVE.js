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
      this.impactosNave++; // Incrementar el contador de impactos
      return true; // Indicar que hubo un impacto
    }
    return false; // Indicar que no hubo impacto
  }
  movimiento() {
    if (this.chocar) {
      this.posy -= this.vel;
      
      // Verificar si la nave está sobre el planeta
      if (this.estaSobrePlaneta()) {
        this.detenerNave(); // Llama al método para detener la nave
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
    // Asumiendo que el planeta tiene una posición y altura determinada
    return this.posy <= this.planeta.posy + this.planeta.ancho / 2; // Ajusta esto según las coordenadas del planeta
  }
   detenerNave() {
    this.chocar = false; // Detiene el movimiento de la nave
    // Puedes agregar más lógica aquí si necesitas realizar alguna acción adicional al detener la nave
  }

}
