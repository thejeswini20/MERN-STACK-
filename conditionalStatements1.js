//if
a = 5;
if(a%2 === 0){
    console.log("Even")
}
//if else
if(a%2 === 0) console.log("Even");
else console.log("Odd");

//else if 
var mark = 90;
if(mark>=90) console.log("O");
else if(mark>=70) console.log("A");
else if(mark>=50) console.log("B");
else console.log("Fail");

//switch
day = 1;
switch(day){
    case 1:
        {
          console.log("Sunday");
          break;
        }

    case 2:{
        console.log("Monday");
        break;
    }

     case 3:{
        console.log("Tuesday");
        break;
    }

     case 4:{
        console.log("Wednesday");
        break;
    }

     case 5:{
        console.log("Thursday");
        break;
    }

     case 6:{
        console.log("Friday");
        break;
    }
     case 7:{
        console.log("Saturday");
        break;
    }

    default: {
        console.log("Invalid number");
        break;
    }
}

//Terinary Operator 
a=10;
var result =(a%2 == 0) ? "Even":"Odd";
console.log(result);

//Else if using ternary
mark = 90;
var result = (mark>=90) ? "O" :(mark>=70) ? "A": (mark>=50) ? "B" : "Fail";
console.log(result);



