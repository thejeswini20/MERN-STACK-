class Person{
    Name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name,this.age);
    }
}
var p1 = new Person("Thejeswini",19);
p1.display();