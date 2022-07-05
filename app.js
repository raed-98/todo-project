var myName= prompt("please enter your name?") ;
var yourGender= prompt("please enter your gender?") ;  
 if  (yourGender === "male || female") { 
    alert("YES it correct") 
    console.log(yourGender);
   
} else {
    alert("please enter your correct gender?") 
    console.log(yourGender);
} 

var yourAge=prompt("please enter your age?");
if (yourAge<=0) { 
    alert("please enter your correct age?")
    console.log(yourAge); 
    
}
else{
    alert("please enter your correct age? ") 
    console.log(yourAge);
} 

 var confirmWelcome=confirm("skip the welcoming message?");
 console.groupCollapsed(confirmWelcome) ; 

 

 