class SideTab{

    constructor(){
     
    this.fondo=loadImage("data/sideTab.png");

    }

    paint(userName){
        image(this.fondo,0,0);
        fill(46,82,80);
        textSize(16);
        textAlign(LEFT);       
        text(userName,129,121);
        textSize(16);
        text("Mi perfil",129,137);
        textSize(17);
        text("Mi ubicación",70,290);
        text("Historial de compras",70,365);
        text("About us",70,443);

    }

    goLastPage(){
        if(mouseX>360 && mouseX <474 &&
            mouseY>33 && mouseY<1000){
            return true;
        }
    }

    goProfile(){
        if(mouseX>129 && mouseX <182 &&
            mouseY>120 && mouseY<137){
            return true;
        }
    }

    goLocation(){
        if(mouseX>0 && mouseX <360 &&
            mouseY>243 && mouseY<316){
            return true;
        }
    }

    goRecord(){
        if(mouseX>0 && mouseX <360 &&
            mouseY>320 && mouseY<395){
            return true;
        }
    }
    goAboutUs(){
        if(mouseX>0 && mouseX <360 &&
            mouseY>399 && mouseY<472){
            return true;
        }
    }

}