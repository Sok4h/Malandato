
class LoginScreen{

    constructor(){
        
        this.arrayInputs=[];
        this.button = new Button(155,741,"Entrar"); 
        this.userName;
        this.userPassword;
        this.incrementPosY = 0;
        this.advice = false;
        this.fondo = loadImage("data/fondoVerde.png");
        this.message = loadImage("data/mensaje2.png");
        

        for (let i = 0; i < 2; i++) {
            this.arrayInputs.push(new Input(66, 484+ this.incrementPosY,0));
			this.incrementPosY+=139;
		}

    }

    
    paint() {

        //Imagen de fondo de la pantalla 1. Tiene el logo de Malandato y la barra de notificaciones del móvil.
        image (this.fondo, 0, 0); 


        //Texto de "Nombre de Usuario", aparece encima del primer input. 
        fill(255);
        textSize(17);
        textAlign(CENTER); 
        text("Nombre de Usuario", width/2, 460);

        //Texto de "Contraseña", aparece encima del segundo input. 
        text("Contraseña", width/2, 599); 
        
  
		for (let i = 0; i < this.arrayInputs.length; i++) {
			this.arrayInputs[i].paint();
        }
        
		this.arrayInputs[0].displayText();
		this.arrayInputs[1].displayPassword();
        
        this.button.paint(0);

        if (this.advice){

            image(this.message,57,200);
            textAlign(CENTER);
            textSize(23);
            fill(46,82,80);
            text('"Usuario o contraseña incorrectos"',width/2,284);
            if(frameCount%120==0){
                this.advice=false;
            }
    
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
    
    pressButtons(ok) {
	
        if (this.button.over) {
            
            this.userName = this.arrayInputs[0].text;
            this.userPassword = this.arrayInputs[1].text;

            if(ok==false){
            this.advice =true;
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