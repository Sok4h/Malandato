let screen;
let loginScreen;

function setup() {
    createCanvas(474,1000);

    screen = 0;
    font = loadFont("/data/Bebas.ttf");
	loginScreen = new LoginScreen ();
    
  }
  
  function draw() {
    textFont(font);

   switch(screen){
      case 0:

      loginScreen.paint();

      break;

   }

  }

    function mousePressed() {
    switch(screen) {
    
    case 0:
    loginScreen.focusInputs();
    loginScreen.pressButtons();
    
    break;

      }
    }

    function keyPressed() {

		switch(screen) {
		case 0:
		
		if(keyCode != 8) {
        
            loginScreen.writeTextInput();
			
		}else{
            loginScreen.eraseTextInput();
        }
		
		break;
		
        }
    
    }

	
 