class Button{

    constructor(posX, posY, text){
      
        this.posX = posX;
        this.over = false;
        this.posY = posY;
        this.text = text;
        
    }

    paint() {
        noStroke();
        if (mouseX >= this.posX && mouseX <= this.posX + 165
                && mouseY >= this.posY && mouseY <= this.posY + 50) {

            fill(219,52,44);
            this.over = true;
            
        }else {
            
            fill(221,85,71);
            this.over = false;
        }
        
        rect(this.posX,this.posY,165,50,40);
        fill(255);
        textAlign(CENTER);
        text(this.text,this.posX+(165/2), this.posY+30);
    
       }


}