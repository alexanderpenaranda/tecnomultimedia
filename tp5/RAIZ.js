class raiz {
  constructor() {
    this.crearMeteorito();
    this.crearNave();
    this.crearPlaneta();
    this.crearBotonReinicio()
      this.impactosNave = 0;
    this.gameOver = false;
    this.impactoInicial = false;
    this.juegoComenzado = false;
  }

  dibujar() {
    if (!this.juegoComenzado) {
      // Mensaje inicial antes de comenzar el juego
      fill(255);
      textSize(15);
      text("¡Bienvenido! ", width / 2, height / 2);
      text("tu objetivo es llegar al planeta ", width / 2, height / 2+50);
      text("pero si chocas con el asteroide pierdes SUERTE ", width / 2, height / 2+100);
    } else {
      if (!this.gameOver) {
        for (let i = 0; i < 6; i++) {
          this.meteorito[i].dibujo();
          this.meteorito[i].movimiento();
          if (!this.impactoInicial&&this.choque(this.nave.posx, this.nave.posy, this.nave.ancho, this.meteorito[i].posx, this.meteorito[i].posy, this.meteorito[i].ancho)) {
            this.impactosNave ++;
            this.impactoInicial = true;
          }
          if (this.impactosNave === 1) { // Si se alcanza el número máximo de impactos
            this.nave.detenerNave();
            this.gameOver = true;
          }
          this.impactoInicial = false;
        }
      }
      for (let i = 0; i < 1; i++) {
        this.planeta[i].dibujo();
        if (this.choque(this.nave.posx, this.nave.posy, this.nave.ancho, this.planeta[i].posx, this.planeta[i].posy, this.planeta[i].ancho)) {
          this.nave.detenerNave();
          background(255, 255, 0);
          fill(0);
          text("¡GANASTE!", width/2, height/2  );
          this.gameOver = true;
        }
      }

      if (this.gameOver) {
        background(255, 0, 0);
        fill(0);
        text("¡PERDISTE!", width / 2, height / 4);
        this.botonReinicio.dibujarBoton(0, 1, "Reiniciar");
      }
      if (!this.nave.estaSobrePlaneta()) {
        this.nave.movimiento();
      }
      fill(250);
      textSize(20);
      text("Impactos: " + this.impactosNave, 20, 40);
      this.nave.dibujo();
    }
  }
  crearBotonReinicio() {
    this.botonReinicio = new Boton(width / 2 - 50, height / 2 - 25, 100, 50); // Crear botón de reinicio
  }
  mousePressed() {
    if (!this.juegoComenzado) {
      this.juegoComenzado = true;
    } else {
      if (this.gameOver) {
        if (this.botonReinicio.botonPress()) {
          this.reiniciarJuego();
        }
      }
    }
  }
  reiniciarJuego() {
    // Reiniciar valores del juego
    this.pantalla = 0; // Reiniciar pantalla inicial
    this.gameOver = false;
    // Reiniciar la nave a su posición inicial
    this.nave = new Nave(width / 2 - 10, 800, 40);

    // Crear nuevos meteoritos
    this.crearMeteorito();

    // Crear nuevos planetas
    this.crearPlaneta();

    // Reiniciar otras variables específicas del juego, si las tienes
    // this.sinImpacto = 0;
    this.impactosNave = 0;
    this.juegoComenzado = false;
  }
  crearMeteorito() {
    this.meteorito = []
      for (let i=0; i<6; i++) {
      this.meteorito[i] = new Meteorito(i*75+10, 20, 30);
    }
  }
  crearNave() {
    this.nave = new Nave(width/2-10, 800, 40);
  }

  crearPlaneta() {
    this.planeta = []
      for (let i=0; i<2; i++) {
      this.planeta[i] = new Planeta(width/2, i*700+25, 100);
    }
  }
  choque(x, y, d, px, py, nd) {
    let distan = dist(x, y, px, py);
    return distan<d/2+nd/2;
  }

  keyPressed() {
    if (!this.gameOver) {
      if (keyCode === RIGHT_ARROW && this.nave.posx < width - this.nave.ancho / 2) {
        this.nave.movDerecha();
      }
      if (keyCode === LEFT_ARROW && this.nave.posx > this.nave.ancho / 2) {
        this.nave.movIzquierda();
      }
    }
  }
}
