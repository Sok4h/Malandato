class ProfileScreen{

    constructor(){

        this.arrayInputs=[];
        this.advice=false;
        this.incrementPosY = 0;
        this.cardNumber="";
        this.cvv="";
        this.expirationDate=";"
        this.button = new Button(155,900,"Continuar"); 
        this.fondo=loadImage("data/perfil.png");
        this.message = loadImage("data/mensaje.png");

        for (let i = 0; i < 3; i++) {
            this.arrayInputs.push(new Input(66, 570+ this.incrementPosY,1));
			this.incrementPosY+=93;
		}
    }
    paint(name,mail,cellphone,birthdate){

        background(255);
        image(this.fondo,0,0);
        textSize(19);
        textAlign(CENTER); 
        fill(46,82,80);
        text("Perfil",width/2,150);
        text("Metodo de pago",width/2,450);
        textSize(15);
        text("Numero de tarjeta",width/2,559);
        text("CVV",width/2,652);
        text("Fecha de vencimiento",width/2,734);

        textAlign(LEFT);
        text(name,217,236);
        text(mail,217,262);
        text(cellphone,217,288);
        text(birthdate,217,315);

        for (let i = 0; i < this.arrayInputs.length; i++) {
            this.arrayInputs[i].paint();
            this.arrayInputs[i].displayText();
        }

        this.button.paint();

        if (this.advice){

            image(this.message,57,380);
            textAlign(CENTER);
            textSize(23);
            fill(255);
            text('"tarjeta registrada"',width/2,462);
            if(frameCount%120==0){
                this.advice=false;
              }
    
         }
    }

    pressButtons() {
	
        if (this.button.over) {
            
            this.cardNumber = this.arrayInputs[0].text;
            this.cvv = this.arrayInputs[1].text;
            this.expirationDate = this.arrayInputs[2].text;

            console.log(this.cardNumber);
            console.log(this.cvv);
            console.log(this.expirationDate);

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