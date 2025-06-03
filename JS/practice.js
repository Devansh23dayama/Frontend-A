function weekdays(days)//parameter
{
  if(days==1){
      console.log("monday")
  }
  else if(days==2){
      console.log("tuesday")
  }
  else if(days==3){
      console.log("wednesday")
  }
  else if(days==4){
      console.log("thrusday")
  }
  else if(days==5){
      console.log("friday")
  }
  else if(days==6){
      console.log("saturday")
  }
  else if(days==7){
      console.log("sunday")
  }
  else
  {
      console.log("false input")
  }
}
weekdays(7)//argument




 function weekdays(days){
     
     switch(days){
         
         
             case"1":
             console.log("monday");
             break;
             
             case"2":
             console.log("tuesday");
             break;
             
             case"3":
             console.log("wednesday");
             break;
             
             case"4":
             console.log("thrusday");
             break;
             
             case"5":
             console.log("friday");
             break;
             
             case"6":
             console.log("saturday");
             break;
             
             case"7":
             console.log("sunday");
             break;
             
             default:
             console.log("wrong input");
             break;
     }
   
     
 }


  weekdays("5")
     
function age(age){

(age>18)?console.log("can vote"):console.log("can't vote");
}


age(19)

