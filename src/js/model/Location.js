class Location{

constructor(){

this.city="cali";

}

check(city, addres){
   

     if(city == this.city && addres.startsWith("cll")){
       return true;
     }     
  }



}