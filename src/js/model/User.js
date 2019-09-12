class User{

constructor(name,userName,userPassword,userMail,userCellphone,userBirthdate){

this.name=name;
this.userName=userName;
this.userPassword=userPassword;
this.userMail=userMail;
this.userCellphone=userCellphone;
this.userBirthdate=userBirthdate

}

login(userName,userPassword){

if(userName == this.userName && userPassword == this.userPassword){
    return true;
}
return false;

}


}