﻿
        //four ways to inharitance Methodes & Properties 

        //simple inharitance
        function Tempalte(value) {
            this.value = value;
        }
        
Tempalte.prototype.Templatemethode = function (name) {
    this.name = name;
    return this.value;
}


function Campaign(number) {
    this.number = number;
    Tempalte.call(this,567)
}

        
var temp = new Tempalte(123);
Campaign.prototype = temp;
var camp = new Campaign(345);
console.log(camp.Templatemethode("venkat"));
console.log(camp.value);
console.log(camp.name);


// use object.create 

function Tempalte1(value) {
    this.value = value;
}

Tempalte1.prototype.Templatemethode1 = function (name) {
    this.name = name;
    return this.value;
}


function Campaign1(number) {
    this.number = number;
    Tempalte1.call(this, 77)
}

var temp1 = new Tempalte1(99);
var camp1 = new Campaign1(88);

camp1 = Object.create(temp1);
console.log(camp1.Templatemethode1("venkat"))
  
console.log(camp1.value);
console.log(camp1.name)



//use object.create and prototype 


function Tempalte2(value) {
    this.value = value;
}
     
Tempalte2.prototype.Templatemethode2 = function (name) {
    this.name = name;
    return this.value;
}
     

function Campaign2(number) {
    console.log(number)
    this.number = number;
    Tempalte2.call(this, 77)
}
   

var temp2 = new Tempalte2(99);
       
Campaign2.prototype = Object.create(Tempalte2.prototype);
Campaign2.constructor = Campaign2;
var camp2 = new Campaign2(88);
console.log(Campaign2.constructor)

console.log(camp2.Templatemethode2("eswar"));
console.log(camp2.value);
console.log(camp2.name);
       
//function copying
var Template3 = Campaign2;
Template3("technologies")
var temp3 = new Template3(99);
console.log(temp3.Templatemethode2(55))
console.log(temp3.value)
console.log(temp3.name);