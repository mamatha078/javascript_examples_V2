
        "use strict"

var str = "{ hello: 'world', places: ['Africa', 'America', 'Asia', 'Australia'] }";
var json = JSON.stringify(eval("(" + str + ")"));
console.log(json)

var obj={name:'mamatha',age:24,gender:'female'}
console.log(JSON.stringify(obj))        //delete obj.name;


let add = (a) => {return a * a };
console.log(add(2))


    
function getvenkat(b) {
    var a = 10;
    try {
        this.getmamatha = function () {
            return a - b;
        }
    }
    catch (error) {
        console.log(error)
    }
    finally{
        console.log("ythis will exmaple main")
    }

         
}

var s =new getvenkat("20");
console.log(s.getmamatha())

var object1 = { a: 'mamatha', b: 2, c: false, d: 'venkat', d: 123 };

object1.getdata = function (type) {
    var data = [];
    for (var i in this) {
        if (typeof this[i] == type) {
            data.push(this[i])
            console.log(data)
        }
    }
}
        
var object2 = { a: 'venkat', b: 123 };
var k= object1.getdata.bind('string');
k('object2');
          


var getinharitance = function (name) {
    this.name = name;
}
getinharitance.prototype.getchild = function () {
    return this.name;


}

getinharitance.prototype.getmysalaty = function () {
         
    return this.name;
}
var psalary = function (salary) {
    this.salary = salary;
}
       
var employyee = new getinharitance('mamatha');
psalary.prototype = employyee;
       

var pre = new psalary('500');

console.log(pre instanceof getinharitance)
console.log(pre.hasOwnProperty('name'))

console.log(pre.getchild());


    
//abstract

var shape = function () {
    this.shape = none;
    throw Error;
}
shape.prototype.drow = function () {
    return this.shape;
}
    
var circle = function (shape) {
    this.shape = shape;
}
circle.prototype = Object.create(shape.prototype);
var c = new circle('rectangle');
console.log(c.drow())



var shape1 = function () {
    console.log("mamatha calling")
}
shape1.prototype.drow1 = function () {
    console.log("mamatha not callling")
    return "this is main shape"
}

var circle = function () {

}

circle.prototype = Object.create(shape1.prototype);
circle.prototype.drow1 = function () {
    return "this is circle shap"
}

var rect = function () {

}
rect.prototype = Object.create(shape1.prototype);
rect.prototype.drow1 = function () {
    return "this is rect shap"
}

var triangle = function () {

}
triangle.prototype = Object.create(shape1.prototype);
var data = [];
var k = new shape1();
var d = [new shape1(), new circle(), new rect(), new triangle()];
for (var i in d) {
    data.push(d[i])
        
            
}
console.log(data)
    
