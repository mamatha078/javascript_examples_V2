
        var a = {a:1,b:2};
var b = {a:1,b:2};
console.log(a == b);

var c = new String(5);
var g = new String(5);
var d = "5";
console.log(c==g)
console.log(c == d)

var e = "10";
var f = 10;
console.log(e == f)
console.log(c === g);

var h = "true";
var i = true;
console.log(h == i);

function j() {
    return "10";
}

function k() {
    return "10";
}
console.log("hello"+ j() === k());
          
console.log(null===undefined)
var l = [1, 2, 3,8,9,9];
var m = [1, 2, 3];
var n = l;
console.log(l==m)
console.log(l===n)

var o = new Number(3)
var p = new Number(3);
var q = o;
console.log(o == p);
console.log(o == q);

console.log(l.concat(m));
console.log(Array.prototype.slice.apply(l))
console.log(Array.prototype.push.apply(l))

//object with function calling ways

function activities() {
    console.log("hai")
     

    this.getdata = function () {
        return this.val;
    }
    return this.getdata();
}
var k = new activities();
var obj = {
    get: k.getdata,
    val:50
}

var obj2 = {
    get: k.getdata,
    val:100
}
console.log(obj.get());
console.log(obj2.get());
        
console.log(k.getdata.call(obj));
   