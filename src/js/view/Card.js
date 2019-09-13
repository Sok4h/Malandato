class Card {

    constructor(posX, posY, image, index){
      
        this.posX = posX;
        this.posY = posY;
        this.image = image;
        this.index = index;
        this.name = "";
        this.price;
        this.over = false;
        this.trash1 = loadImage("data/trashS.png");
        this.trash2 = loadImage("data/trashL.png");
        this.plus1 = loadImage("data/plusS.png");
        this.plus2 = loadImage("data/plusL.png");
        
    }

    paint(){

        image(this.image,this.posX,this.posY);
        textSize(15);
        textAlign(LEFT);
        fill(0);
        text(this.name,this.posX+20,this.posY+110);
        text("$"+ this.price,this.posX+20,this.posY+135);

        switch(this.index){

        case 0:

        if (mouseX >= this.posX+320 && mouseX <= this.posX + 340
            && mouseY >= this.posY+120 && mouseY <= this.posY + 150) {
        
            image(this.trash2,this.posX+320,this.posY+120);
            this.over = true;
        
        }else {

            image(this.trash1,this.posX+320,this.posY+120);
            this.over = false;
        }

        break;

        case 1:
            
         if (mouseX >= this.posX+315 && mouseX <= this.posX + 345
            && mouseY >= this.posY+120 && mouseY <= this.posY + 150) {
        
            image(this.plus2,this.posX+315,this.posY+120);
            this.over = true;
        
        }else {

            image(this.plus1,this.posX+315,this.posY+120);
            this.over = false;
        }

        break;

        }

    }



}