class CreditCard{

    constructor(){
       
        this.arrayDates=[];
        this.date=2020;
        for(let i=0;i<20;i++){

            this.arrayDates.push(this.date);
            this.date += 1;

        }

    }

    ValidateCvv(cvv){
        
        if(cvv.length == 3){

            return true;

        }
    }

    ValidateNumber(number){
        
        if(number.length == 16){

            return true;

        }
    }

    ValidateDate(date){
        
        for(let i=0;i<this.arrayDates.length;i++){
        if(date.endsWith(this.arrayDates[i])){

            return true;

        }
      }
    }

    


}