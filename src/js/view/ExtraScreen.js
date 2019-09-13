class ExtraScreen{

    constructor(total){

        this.total=total;
        this.fondo = loadImage("data/fondo2.png");

        this.arrayImage = [];
        this.arrayImage[0] = loadImage("data/gaseosa.png");
        this.arrayImage[1] = loadImage("data/queso.png");
        this.arrayImage[2] = loadImage("data/tiramisu.png");
        this.message = loadImage("data/mensaje.png");
        

        this.arrayCards = [];
        this.button = new Button(155,900,"Continuar"); 
        this.incrementPosY=0;
        

        for(let i=0; i< 3; i++){

            this.arrayCards.push(new Card(57,242+this.incrementPosY,this.arrayImage[i],1));
            this.incrementPosY += 195;

            
         }
    }

    paint(){ 
     
     background(255);
     image(this.fondo,0,0);

     textSize(19);
     textAlign(CENTER); 
     fill(46,82,80);
     text("Extras",width/2,150);
     text("¡Añádele un complemento a tu orden!",width/2,203);
     text("total",100,850);
     text("$"+this.total,350,850);
     
     this.button.paint();
     
     for(let i=0; i< this.arrayCards.length; i++){
        this.arrayCards[i].paint();
     }

     this.arrayCards[0].name="Gaseosa";
     this.arrayCards[0].price = 5000;
     this.arrayCards[1].name="Queso extra";
     this.arrayCards[1].price = 3000;
     this.arrayCards[2].name="Tiramisú";
     this.arrayCards[2].price = 10000;
     
     if (this.advice){

        image(this.message,57,380);
        textAlign(CENTER);
        textSize(23);
        fill(255);
        text('"tarjeta no registrada o ubicacion no registrada"',57,430 ,360,165);
        if(frameCount%120==0){
            this.advice=false;
          }

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

    goOrder(){
        if(mouseX>435 && mouseX<460 &&
            mouseY>45 && mouseY<86){
              
            return true;

          }
    }

    addPress(){

        for(let i=0; i< this.arrayCards.length; i++){
            if(this.arrayCards[i].over){

               this.total+=this.arrayCards[i].price;

               return true;

            }
        }
    }


}