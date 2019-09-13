class RecordScreen{

    constructor(){

        this.arrayCards=[];
        this.incrementPosY = 0;
        this.fondo=loadImage("data/historial.png");
        this.arrayImage=[];
        this.arrayImage[0] = loadImage("data/espagueti.png");
        this.arrayImage[1] = loadImage("data/lasana.png");
        this.arrayImage[2] = loadImage("data/pizza.png");
        this.arrayImage[3] = loadImage("data/risotto.png");

        for (let i = 0; i < 3; i++) {
            this.arrayCards.push(new Card(57,474+this.incrementPosY,this.arrayImage[i],0));
			this.incrementPosY+=93;
		}
    }
    paint(){

        background(255);
        image(this.fondo,0,0);
        textSize(19);
        textAlign(CENTER); 
        fill(46,82,80);
        text("Historial de compra",width/2,150);
        
        for(let i=0; i< this.arrayCards.length; i++){
            this.arrayCards[i].paint();
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

}