class SuccesfulScreen{

    constructor(){

        this.fondo=loadImage("data/compra exitosa.png");
        this.text="¡Tu orden llegará en aproximadamente en 20 minutos!"

    }

    paint(){

        background(255);
        image(this.fondo,0,0);
        textSize(19);
        textAlign(CENTER); 
        fill(46,82,80);
        text("Compra exitosa",width/2,150);
        text(this.text,93,520,286,33);
         

    }

    goSideTab(){
        if(mouseX>13 && mouseX<46 &&
            mouseY>42 && mouseY<78){
              
            return true;

          }
    }

    goOrder(){
        if(mouseX>435 && mouseX<460 &&
            mouseY>45 && mouseY<86){
              
            return true;

          }
    }

    goHome(){
        if(mouseX>202 && mouseX<272 &&
          mouseY>54 && mouseY<92){
            
          return true;

        }
  }


}