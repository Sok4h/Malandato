class LocationScreen{

    constructor(){

        this.arrayInputs=[];
        this.incrementPosY = 0;
        this.city="";
        this.addres="";
        this.button = new Button(155,603,"Continuar"); 
        this.fondo=loadImage("data/ubicacion.png");
        this.message = loadImage("data/mensaje.png");
        this.advice=false;

        for (let i = 0; i < 2; i++) {
            this.arrayInputs.push(new Input(66,418+ this.incrementPosY,1));
			this.incrementPosY+=93;
		}
    }
    paint(){

        background(255);
        image(this.fondo,0,0);
        textSize(19);
        textAlign(CENTER); 
        fill(46,82,80);
        text("Ubicación",width/2,150);
        textSize(15);
        text("Ciudad",width/2,405);
        text("Dirección",width/2,498);


        for (let i = 0; i < this.arrayInputs.length; i++) {
            this.arrayInputs[i].paint();
            this.arrayInputs[i].displayText();
        }

        this.button.paint();

        if (this.advice){

            image(this.message,57,700);
            textAlign(CENTER);
            textSize(23);
            fill(255);
            text('"ubicación registrada"',width/2,782);
            if(frameCount%120==0){
                this.advice=false;
              }
    
         }
    }

    pressButtons() {
	
        if (this.button.over) {
            
            this.city = this.arrayInputs[0].text;
            this.addres = this.arrayInputs[1].text;

        }

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

   focusInputs() {
        
    for (let i = 0; i < this.arrayInputs.length; i++) {
        if (mouseX >= this.arrayInputs[i].posX && mouseX <= this.arrayInputs[i].posX + 342
                && mouseY >= this.arrayInputs[i].posY && mouseY <= this.arrayInputs[i].posY + 32) {         
            this.arrayInputs[i].focus = true;
        } else {
            this.arrayInputs[i].focus = false;
        }
    }
    
}

    writeTextInput() {
        
    for (let i = 0; i < this.arrayInputs.length; i++) {
        if (this.arrayInputs[i].focus && this.arrayInputs[i].text.length<40) {
            
            this.arrayInputs[i].text += key;
            return;
        }
    }

}

   eraseTextInput() {
		
    for (let i = 0; i < this.arrayInputs.length; i++) {
        if (this.arrayInputs[i].focus && this.arrayInputs[i].text.length-1>=0) {
            let indice = this.arrayInputs[i].text.length - 1;
            this.arrayInputs[i].text = this.arrayInputs[i].text.substr(0, indice);
        }
    }
    
}


}