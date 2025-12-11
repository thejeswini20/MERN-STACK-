// for...in  
var arr = [1, 2, 3];
for (let i in arr) {
    console.log(i);   // 0,1,2
}

// for...of 
for (let j of arr) {
    console.log(j);   // 1,2,3
}

// forEach 
arr.forEach((val, index) => {
    console.log(val, index);   // 1 0 , 2 1 , 3 2
});

//for in object
 var obj = {
    //name : "theju";
    age :19,
    marks:90
 };
 //for (let i in obj){
   // console.log(i,obj[i])
 //}