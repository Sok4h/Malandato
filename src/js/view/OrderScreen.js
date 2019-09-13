class OrderScreen{

    constructor(size,arrayImage,arrayText,arrayPrice){

        this.size=size;
    
        this.fondo = loadImage("data/fondo2.png");
        this.lines = loadImage("data/lineas.png");
        this.message = loadImage("data/mensaje.png");

        this.arrayCards = [];
        this.arrayImage = arrayImage;
        this.arrayText = arrayText;
        this.arrayPrice = arrayPrice;
        this.button = new Button(155,900,"Continuar"); 
        this.incrementPosY=0;
        this.total=0;

    
        for(let i=0; i< this.size; i++){

            this.arrayCards.push(new Card(57,203+this.incrementPosY,this.arrayImage[i],0));
            this.incrementPosY += 195;

            this.arrayCards[i].name=arrayText[i];
            this.arrayCards[i].price=arrayPrice[i];
            this.total += this.arrayCards[i].price;
            
        }

    }

    paint(){ 
     
     background(255);
     image(this.fondo,0,0);
     image(this.lines,70,800);

     textSize(19);
     textAlign(CENTER); 
     fill(46,82,80);
     text("Orden",width/2,150);
     text("total",100,838);
     text("$"+this.total,350,838);
     
     this.button.paint();
     
     for(let i=0; i< this.arrayCards.length; i++){
        this.arrayCards[i].paint();
     }

    }


    pressButtons() {
	
        if (this.button.over) {
            
            return true;

        }

    }

    goHome(){
          if(mouseX>202 && mouseX<272 &&
            mouseY>54 && mouseY<92){
              
            return true;

          }
    }

    goSideTab(){
        if(mouseX>13 && mouseX<46 &&
            mouseY>42 && mouseY<78){
              
            return true;

          }
    }

    erasePress(){

        for(let i=0; i< this.arrayCards.length; i++){
            if(this.arrayCards[i].over){

                this.total -= this.arrayPrice[i].price;
                this.arrayCards.splice(i,1);
                this.arrayText.splice(i,1);
                this.arrayPrice.splice(i,1);
                this.arrayImage.splice(i,1);
   
               return true;

            }
        }
    }

 }
