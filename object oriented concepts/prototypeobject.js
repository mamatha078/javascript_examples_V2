﻿//Function.prototype
Function.prototype.newmethode = function (name, f) {
    this.prototype[name] = f;
    return this;
}

String.newmethode("sumstringmethode", function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this.charCodeAt(i);
    }
    return sum;
})
console.log('a'.sumstringmethode());

Array.newmethode("arraymethode", function () {
    console.log(this.length)
})
var a = [1, 4, 5, 5, 7];
a.arraymethode();

Number.newmethode("numbermethode", function () {
    console.log(this)
})
var k = 9;
k.numbermethode();