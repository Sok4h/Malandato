
class SignInScreen{

    constructor(){
        
        this.arrayInputs=[];
        this.button = new Button(154,741,"Registrarse"); 
        this.userName="";
        this.userPassword="";
        this.incrementPosY = 0;
        this.fondo = loadImage("data/fondoVerde.png");

        for (let i = 0; i < 4; i++) {
            this.arrayInputs.push(new Input(66, 484+ this.incrementPosY));
			this.incrementPosY+=80;
		}

    }

    
    paint() {
        
        image (this.fondo, 0, 0); 
		for (let i = 0; i < this.arrayInputs.length; i++) {
			this.arrayInputs[i].paint();
        }
        
        console.log(this.arrayInputs[0].getTextSize());

        this.arrayInputs[0].displayText();
        this.arrayInputs[1].displayText();
        this.arrayInputs[2].displayText();
		this.arrayInputs[3].displayPassword();
		
		this.button.paint(mouseX,mouseY);      
			
    }
    
    focusInputs(mx, my) {
        
		for (let i = 0; i < this.arrayInputs.length; i++) {
			if (mx >= this.arrayInputs[i].posX && mx <= this.arrayInputs[i].posX + 342
					&& my >= this.arrayInputs[i].posY && my <= this.arrayInputs[i].posY + 32) {         
                this.arrayInputs[i].focus = true;
			} else {
				this.arrayInputs[i].focus = false;
			}
		}
		

    }
    
    pressButtons(mx, my) {
	
        if (mx >= this.button.posX && mx <= this.button.posX + 200
                && my >= this.button.posY && my <= this.button.posY + 30) {
            
            this.userName = this.arrayInputs[0].text;
            this.userPassword = this.arrayInputs[1].text;
        }

}

    writeTextInput() {
    for (let i = 0; i < this.arrayInputs.length; i++) {
        if (this.arrayInputs[i].focus == true && this.arrayInputs[i].text.length<40) {
            console.log("puto el que lo lea");
            this.arrayInputs[i].text += key;
            return;
        }
    }

}

     eraseTextInput() {
		
    for (let i = 0; i < this.arrayInputs.length; i++) {
        if (this.arrayInputs[i].focus == true && this.arrayInputs[i].text.length-1>=0) {
            let indice = this.arrayInputs[i].text.length - 1;
            this.arrayInputs[i].text = this.arrayInputs[i].text.substr(0, indice);
        }
    }
    
}


}