class AboutUs{

    constructor(){

        this.fondo=loadImage("data/about us.png");
        this.text="En Malandato nos aseugarmos de que tu comida llegue siempre caliente y lista para disfrutar. Nuestra misión es comprometernos completamente a las necesidades de nuestra distinguida clientela"

    }

    paint(){

        image(this.fondo,0,0);
        textSize(19);
        textAlign(CENTER); 
        fill(255);
        text("About us",width/2,528);
        text(this.text,82,574,310,130);
         

    }


}