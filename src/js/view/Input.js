class Input {


constructor(posX,posY,index){

    this.index = index;
    this.posX = posX;
	this.posY = posY;
	this.focus = false;
    this.text = "";
    
   }

   paint() {

    if(this.focus) {
            
       stroke(0,255,0);
        
    }else {
        noStroke();
    }

    if(this.index == 0){
    fill(255,191);
    }

    if(this.index == 1){
        fill(46,82,80,191);
    }
    rect(this.posX,this.posY,342,32,100);
    
}


displayText() {
    if(this.index == 0){
    fill(0);
    }
    if(this.index == 1){
    fill(255);
    }
    textSize(16);
    textAlign(LEFT);
    noStroke();
    text(this.text,this.posX+10,this.posY+20);
}

displayPassword() {

    let codeSecure = "";
    
    for (let i = 0; i < this.text.length; i++) {
        codeSecure += "*";
    }
    
    if(this.index == 0){
        fill(0);
        }
        if(this.index == 1){
        fill(255);
        }
    textSize(16);
    textAlign(LEFT);
    noStroke();
    text(codeSecure,this.posX+10,this.posY+20);
}


}