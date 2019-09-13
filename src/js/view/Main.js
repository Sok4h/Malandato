let screen;
let lastScreen;
let loginScreen;
let signInScreen;
let homeScreen;
let orderScreen;
let extraScreen;
let profileScreen;
let recordScreen;
let locationScreen;
let aboutUsScreen;
let succesfulScreen;
let sideTab;
let user;
let lct;
let creditCard;

let checkLoaction;
let checkCreditCard;
let font;
 

function setup() {
    createCanvas(474,1000);

    screen = 0;
    lastScreen=0;
    font = loadFont("/data/Bebas.ttf");
	loginScreen = new LoginScreen ();
    signInScreen = new SignInScreen ();
    homeScreen = new HomePage();
    sideTab = new SideTab(); 
    profileScreen = new ProfileScreen();
    recordScreen = new RecordScreen();
    locationScreen = new LocationScreen();
    aboutUsScreen = new AboutUs();
    succesfulScreen = new SuccesfulScreen();
    user = new User("Daniel Rojas","daniel3231","1234","danni3231@hotmail.com","3174079982","30/11/1999");
    lct = new Location();
    creditCard = new CreditCard();
    checkLoaction= false;
    checkCreditCard=false;

    console.log(checkLoaction);
    
  }
  
  function draw() {
      textFont(font);

   switch(screen){
      case 0:

      loginScreen.paint();

      if(user.login(loginScreen.userName,loginScreen.userPassword)){

        screen=2;
      }

      break;

      case 1:

      signInScreen.paint();

      break;

      case 2:
    
      homeScreen.paint();

      orderScreen = new OrderScreen(homeScreen.notification,homeScreen.images,homeScreen.texts,homeScreen.prices);
      extraScreen = new ExtraScreen(orderScreen.total);
       
      
      break;

      case 3:

      orderScreen.paint(); 
      
      break;

      case 4:

      sideTab.paint(user.name);

      break;

      case 5:

     
      extraScreen.paint();

      break;

      case 6:

      profileScreen.paint(user.name,user.userMail,user.userCellphone,user.userBirthdate);

      if(creditCard.ValidateCvv(profileScreen.cvv) &&
         creditCard.ValidateNumber(profileScreen.cardNumber) &&
         creditCard.ValidateDate(profileScreen.expirationDate) ){

         checkCreditCard=true;
         profileScreen.advice=true;
     }
     

      break;

      case 7:

      recordScreen.paint();
  
      break;

      case 8:

      locationScreen.paint();

      
     if(lct.check(locationScreen.city,locationScreen.addres)){
         locationScreen.advice=true;
         checkLoaction=true;
     }
     console.log(checkLoaction);

      break;

      case 9:

      aboutUsScreen.paint();

      break;

      case 10:

      succesfulScreen.paint();

      break;
   }

  }

    function mousePressed() {
    switch(screen) {
    
    case 0:
    loginScreen.focusInputs();
    loginScreen.pressButtons(user.login(loginScreen.userName,loginScreen.userPassword));
    
    break;
    
    case 1:
   
    signInScreen.focusInputs();
    signInScreen.pressButtons();
       
    break;

    case 2:
    
    homeScreen.addPress();
  
    if(homeScreen.goOrder()){
        screen=3;
    }
    if(homeScreen.goSideTab()){
        screen=4
        lastScreen=2;
    }

    break;

    case 3:

    if(orderScreen.erasePress()){
        homeScreen.notification-=1;
    }
    
    if(orderScreen.goHome()){
        screen=2;
    }
    if(orderScreen.goSideTab()){
        screen=4
        lastScreen=3;
    }
    if(orderScreen.pressButtons()){

        screen=5;

    }

    break;

    case 4:

    if(sideTab.goLastPage()){
       screen=lastScreen;
    }
    if(sideTab.goProfile()){
        screen=6;
     }
    if(sideTab.goLocation()){
        screen=8;
     }
     if(sideTab.goRecord()){
        screen=7;
     }
     if(sideTab.goAboutUs()){
        screen=9;
     }
      
     break;

     case 5:

     if( extraScreen.pressButtons() &&
         checkCreditCard &&
         checkLoaction){
         screen=10
     }

    if(extraScreen.goHome()){
            screen=2;
        }
    if(extraScreen.goOrder()){
            screen=3;
        }
     if(extraScreen.goSideTab()){
            screen=4
            lastScreen=5;
        }

      break;

      case 6:

        profileScreen.focusInputs();
        profileScreen.pressButtons();

        if(profileScreen.goHome()){
            screen=2;
        }
        if(profileScreen.goOrder()){
            screen=3;
        }
        if(profileScreen.goSideTab()){
            screen=4
            lastScreen=6;
        }

      break;

      case 7:

        if(recordScreen.goHome()){
            screen=2;
        }
        if(recordScreen.goOrder()){
            screen=3;
        }
        if(recordScreen.goSideTab()){
            screen=4
            lastScreen=7;
        }

      break;
      
      case 8:

        locationScreen.focusInputs();
        locationScreen.pressButtons();

        if(locationScreen.goHome()){
            screen=2;
        }
        if(locationScreen.goOrder()){
            screen=3;
        }
        if(locationScreen.goSideTab()){
            screen=4
            lastScreen=8;
        }

      break;

      case 9:

      screen=2

      break;

      case 10:

      if(succesfulScreen.goHome()){
            screen=2;
        }
        if(succesfulScreen.goOrder()){
            screen=3;
        }
        if(succesfulScreen.goSideTab()){
            screen=4
            lastScreen=10;
        }

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
		
		case 1:

        if(keyCode != 8) {
          
        signInScreen.writeTextInput();

        }else{

        signInScreen.eraseTextInput();
        }

        break;

        case 6:

            if(keyCode != 8) {
          
            profileScreen.writeTextInput();
            
            }else{
            
            profileScreen.eraseTextInput();
            }
            

        break;

        case 8:

            if(keyCode != 8) {
          
            locationScreen.writeTextInput();
            
            }else{
            
            locationScreen.eraseTextInput();
            }
            

        break;

        }
    
    }

	
 