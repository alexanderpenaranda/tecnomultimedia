class Principal {
  constructor(){
    //IMAGENES
    this.load();
    //BOTONES
    this.crearBotones();
    //JUEGO
    this.crearjuego = new Juego();
    //TECLAS
    this.crearteclas();
  }
     load() {
    this.imagenes = [];
    for (let i = 0; i < 19; i++) {
      this.imagenes[i] = loadImage("data/img" + i + ".jpg");
    }
  }
  crearBotones(){
    this.pantalla = 0;
    this.anchoBot = 140;
    this.altoBot = 500;
    this.bot1 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot2 = new Boton(width-this.anchoBot, this.altoBot, this.anchoBot, this.altoBot/8);
  }
   dibujar() {
     textSize(20);
    if (this.pantalla===0) {
    background(0);
       text("LOS DESTERRADOS",  width/2-150, 0, width/2, 200);
       text("Comision 1",  width/2-150, 0, width/2, 280);
        text("Alumnos: Augusto Suarez y Alexander Peñaranda",  width/2-150, 0, width/2, 380);
   this.bot1.dibujarBoton(0, 1, "Inicio");
    } else if (this.pantalla===1) {
         this.crearjuego.reiniciarJuego();
      image(this.imagenes[1], 0, 0, 600, 600);
      this.bot2.dibujarBoton(1, 2, "Siguiente");
      text( " \n Las brujas con ojos de fuego, al rededor de la caldera calentando un líquido espeso amarillo \n, y preguntan ¿Dónde están el cristal?¿La cera está lista?¿Lasss agujaaas?",  width/2-150, 0, width/2, 200);
    } else if (this.pantalla===2) {
      image(this.imagenes[2], 0, 0, 600, 600);
      this.bot1.dibujarBoton(2, 3, "Siguiente");
      text("La aguja atraviesa el corazón del muñeco de cera, armado por las manos verdes de las brujas, con entrañas venenosas, cantando que el trabajo y las trabas redoblemos",  width/2-150, 0, width/2, 200);
    } else if (this.pantalla===3) {
      image(this.imagenes[3], 0, 0, 600, 600);
      this.bot1.dibujarBoton(3, 4, "Siguiente");
      text("Se gritan entre ellas que miren con atención el cristal el cual nos muestra como agonizan unos hombres por sus vidas, en cohete",  width/2-150, 0, width/2, 200);
    } else if (this.pantalla===4) {
      image(this.imagenes[4], 0, 0, 600, 600);
      this.bot1.dibujarBoton(4, 5, "Siguiente");
      text("Los hombres están al rededor de un cadáver que murió Simplemente se murió, todos respiran como si estuviera recuperando el aire de los pulmones, sorprendidos del suceso ocurrido",  width/2-150, 0, width/2, 200);
  }  else if (this.pantalla===5) {
    image(this.imagenes[5], 0, 0, 600, 600);
      this.bot1.dibujarBoton(5, 6, "Siguiente");
      text("Los astronautas hablan de los compañeros que murieron en el trascurso del viaje, sobre las pesadillas que tuvieron sobre criaturas sobrenaturales, miedos y temores",  width/2-150, 0, width/2, 200);
    } else if (this.pantalla===6) {
      image(this.imagenes[6], 0, 0, 600, 600);
      this.bot1.dibujarBoton(6, 7, "Siguiente");
    text("En ese momento se escucha las alarmas de la nave, avisando que se hacerca asteroides, los astronautas corren hacia el panel de controles con miedo y deseperacion",  width/2-150, 0, width/2, 200);
    } else if (this.pantalla===7) {
          background(0);
      this.bot1.dibujarBoton(7, 8, "Iniciar juego");
      text("COMIENZA EL JUEGO",  width/2-150, 0, width/2, 200);
       text("1.Tu objetivo es llevar el cohete al planeta marte",  width/2-150, 0, width/2, 280);
        text("2.Pero si chocas con un asteroide pierdes ",  width/2-150, 0, width/2, 380);
         text("3.Puedes esquivar con las felchas y disparar con W ",  width/2-150, 0, width/2, 480);
    } else if (this.pantalla===8) {
           background(0);
      this.crearjuego.display();
  if(this.crearjuego.Plase() === 9){
    this.pantalla = 9;
   } else if(this.crearjuego.Plase() === 19){
     this.pantalla = 19;
       }  
    }else if(this.pantalla===9){
       background(0);
      this.bot1.dibujarBoton(9, 10, "Siguiente");
      text("GANASTE", width/2, height/2);
         this.crearjuego.reiniciarJuego();
   }else if(this.pantalla===10){
    image(this.imagenes[7], 0, 0, 600, 600);
      this.bot1.dibujarBoton(10, 11, "Siguiente");
      text("El capitán de la nave habla sobre unos libros que tiene guardados,\n  y dice que están prohibidos en la tierra,  para que la humanidad solamente \n sea de mente clara, y se queda viendo cómo se va dimensionado el planeta Marte.", width/2-150, 0, width/2, 200);
     } else if(this.pantalla===11){
    image(this.imagenes[8], 0, 0, 600, 600);
    this.bot1.dibujarBoton(11, 12, "Siguiente");
      text("Se sorprende, las brujas con sus manos verdes, por lo que dijo el capitán. \n Miran hacia una ciudad esmeralda rodeada del mar seco.",  width/2-150, 0, width/2, 200);
    } else if(this.pantalla===12){
   image(this.imagenes[9], 0, 0, 600, 600);
    this.bot1.dibujarBoton(12, 13, "Siguiente");
      text("En esa ciudad se encontraban autores muy conocidos por escribir\n sobre fantasía o lo sobrenatural,\n discutiendo las ideas, del cohete que se aproxima, llegando a Marte",  width/2-150, 0, width/2, 200);
    } else if(this.pantalla===13){
   image(this.imagenes[10], 0, 0, 600, 600);
    this.bot1.dibujarBoton(13, 14, "Siguiente");
       text("Los escritores con un miedo en común, la humanidad, hablan sobre\n la destrucción de su mundo y que decisión tomaran, \n si escapar a otro mundo o buscando en un valle ayuda",  width/2-150, 0, width/2, 200);
    } else if(this.pantalla===14){
    image(this.imagenes[11], 0, 0, 600, 600);
       this.bot1.dibujarBoton(14, 15, "Siguiente");
       text("Mientras los escritores piden ayuda a otros escritores desterrados \n y reunen a las ciaturas sobrenaturles, \n la nave llega a marte y aterriza",  width/2-150, 0, width/2, 200);
    } else if(this.pantalla===15){
      image(this.imagenes[12], 0, 0, 600, 600);
       this.bot1.dibujarBoton(15, 16, "Siguiente");
       text("Los astronautas bajan escuchando ruidos perturbadores,\n con miedo queman los últimos libros de fantasía.",  width/2-150, 0, width/2, 200);
    }else if(this.pantalla===16){
      image(this.imagenes[13], 0, 0, 600, 600);
       this.bot1.dibujarBoton(16, 17, "Siguiente");
       text("Los escritores, las criaturas, las brujas se  \n evaporizaron en el aire, como si nunca hubiesen existido",  width/2-150, 0, width/2, 200);
    }else if(this.pantalla===17){
      image(this.imagenes[14], 0, 0, 600, 600);
       this.bot1.dibujarBoton(17, 18, "Siguiente");
       text("Uno de los astronautas creyó ver como la ciudad esmeralda, \n que había leído una vez se derrumbarse, \n el capitán lo manda al psicoanalista",  width/2-150, 0, width/2, 200);
    }else if(this.pantalla===18){
      image(this.imagenes[15], 0, 0, 600, 600);
       this.bot1.dibujarBoton(18, 0, "FIN");
       text("El capitan miro a su alrededor desilusionado por no encontrar nada,\n absolutamente nada",  width/2-150, 0, width/2, 200);
    }//finales alternativos
    else if(this.pantalla===19){
          background(0);
        this.bot1.dibujarBoton(19, 20, "SiguienteA");
        this.bot2.dibujarBoton(19, 24, "siguienteB");
         text("PERDISTE", width/2, height/2);           
    } else if(this.pantalla===20){
     image(this.imagenes[16], 0, 0, 600, 600);
        this.bot2.dibujarBoton(20, 21, "Siguiente");
    text("En ese momento la nave explota", width/2-150, 0, width/2, 200);
    } else if(this.pantalla===21){
     image(this.imagenes[1], 0, 0, 600, 600);
        this.bot2.dibujarBoton(21, 22, "Siguiente");
      text("Las brujas se ríen y cantan con unas voces aterradoras,\n miran a una ciudad y gritan \n QUE EL FUEGO ARDA Y LOS CREADORES SE LEVANTEN DEL EXILIO", width/2-150, 0, width/2, 200);
    } else if(this.pantalla===22){
     image(this.imagenes[17], 0, 0, 600, 600);
       this.bot2.dibujarBoton(22, 23, "Siguiente");
      text("Las criaturas sobrenaturales se reúnen, llamadas por el canto de las brujas,\n se juntas para planear con sus creadores que harán y ellos dicen todos juntos", width/2-150, 0, width/2, 200);
    }  else if(this.pantalla===23){
     image(this.imagenes[15], 0, 0, 600, 600);
      this.bot2.dibujarBoton(23, 0, "FIN");
      text("LLEGO LA HORA DE VOLVER", width/2-150, 0, width/2, 200);
    }else if(this.pantalla===24){
    image(this.imagenes[18], 0, 0, 600, 600);
       this.bot2.dibujarBoton(24, 25, "siguiente");
      text("Por daños el daño de los asteroides, los astronautas deciden\n ir a la Luna, donde se encuentran la\n ayuda necesatia", width/2-150, 0, width/2, 200);
    }else if(this.pantalla===25){
      image(this.imagenes[6], 0, 0, 600, 600);
       this.bot2.dibujarBoton(25, 26, "siguiente");
        text("Pero no son obligados a volver a la tierra, ya que no tenian las capacidades para ir a marte", width/2-150, 0, width/2, 200);
    }else if(this.pantalla===26){
      image(this.imagenes[12], 0, 0, 600, 600);
       this.bot2.dibujarBoton(26, 0, "FIN");
        text("Por el miedo a las pesadillas los astronautas, queman los libros, prometiendo ir a marte lo antes posible", width/2-150, 0, width/2, 200);
    }
   }   
 crearteclas(){
    this.crearjuego.teclaPresionada(keyCode);
 }
  accionarBotones() {
    if (this.bot1.botonPress(0, this.altoBot, this.anchoBot, this.altoBot) && this.pantalla===this.bot1.actual) {
      this.pantalla = this.bot1.prox;
    }
    if (this.bot2.botonPress(width-this.anchoBot, this.altoBot, this.anchoBot, this.altoBot)&&this.pantalla===this.bot2.actual) {
      this.pantalla = this.bot2.prox;
    } 
  }
}
