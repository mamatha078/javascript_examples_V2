
//console.log(new String("5") == "5")
    //var number1, number2;
    //number1 = 123;
    //number2 = number1;
//console.log(number2);
    //number1 = 124;
//console.log(number2)


    //var obj1, obj2;

    //obj1 = {
    //    name:'mamatha'

    //}
    //obj2 = obj1;

//console.log(obj2.name)
    //obj1.name = "venkat";
//console.log(obj2.name);


    function Employee(name) {
        console.log(this)
        this.name = name;
        
    }
   
Employee.prototype.toString = function () {
    console.log(this.name);
}
   
var r = new Employee("mamatha");
console.log(r)
var obj4 = { age: 24 }

obj4.Employee = function () {
    console.log(this)
}
    
Employee.call(obj4, "venkat.bekkem");

function myfunction() {
    return 42;
}
myfunction.prototype.data = "777";

var k = new myfunction();
console.log(k.data)
myfunction1 = myfunction;
    
