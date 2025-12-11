var demo = ()=> {
    console.log("Hello world!")
}

var main = (callback)=>{
    console.log("Main Called");
    callback();
}

main(demo);

//2
var main = (callback)=>{
    console.log("Main Called");
    callback();
}
//main()=>{
  //  console.log("Hello world!")   
//});