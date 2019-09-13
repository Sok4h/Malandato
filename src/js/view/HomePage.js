class HomePage {

    constructor(){

        this.fondo = loadImage("data/fondo2.png");
        this.message = loadImage("data/mensaje.png");
        this.arrayImage = [];
        this.arrayImage[0] = loadImage("data/espagueti.png");
        this.arrayImage[1] = loadImage("data/lasana.png");
        this.arrayImage[2] = loadImage("data/pizza.png");
        this.arrayImage[3] = loadImage("data/risotto.png");

        this.images=[];
        this.texts=[];
        this.prices=[];
        this.arrayCards = [];
        this.incrementPosY=0;
        this.notification=0;
        this.advice =false;

        for(let i=0; i< 4; i++){

            this.arrayCards.push(new Card(57,203+this.incrementPosY,this.arrayImage[i],1));
            this.incrementPosY += 195;
            
         }
    }

    paint(){ 
     
     background(255);
     image(this.fondo,0,0);
     
     textSize(19);
     textAlign(CENTER); 
     fill(46,82,80);
     text("Platillos",width/2,150);

     if (this.notification>0){
       fill(221,85,71);
       noStroke();
       ellipse(432,45,18,18);
       textAlign(CENTER);
       textSize(11);
       fill(255);
       text(this.notification,432,48);
     }
     
     for(let i=0; i< this.arrayCards.length; i++){
        this.arrayCards[i].paint();
     }

     this.arrayCards[0].name="Espaguetis a la boloñesa";
     this.arrayCards[0].price = 19900;
     this.arrayCards[1].name="Lasaña";
     this.arrayCards[1].price = 19900;
     this.arrayCards[2].name="Pizza Pepperoni";
     this.arrayCards[2].price = 29900;
     this.arrayCards[3].name="Risotto";
     this.arrayCards[3].price = 14900;

     if (this.advice){

        image(this.message,57,482);
        textAlign(CENTER);
        textSize(23);
        fill(255);
        text('"No puedes ordenar mas"',width/2,570);
        if(frameCount%120==0){
            this.advice=false;
          }

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

        for(let i=0; i< 4; i++){
            if(this.arrayCards[i].over){

                if(this.notification<3){
                this.notification+=1
                }else{
                this.advice=true;
                }

                this.images.push(this.arrayCards[i].image);
                this.texts.push(this.arrayCards[i].name);
                this.prices.push(this.arrayCards[i].price);
               
                return true;
                

            }
        }
    }



}