
        function manul(name) {
            this.name = name;
            this.manularray = [];
        }

manul.prototype.manulchild = function () {
    var newbaby = new manul("baby is " + this.name);
    this.manularray.push(newbaby);
    return newbaby;

}

manul.prototype.toString = function () {
    console.log('["' + this.name + '"]')
    // return '[manul "' + this.name+'"]';
}

cat.prototype = new manul();
function cat(name) {
    this.name = name;
}

cat.prototype.toString = function () {
    return '[cat "'+this.name+'"]'
}
rat.prototype = new manul();
function rat(name) {
    this.name = name;
}

rat.prototype.toString = function () {
          
    return '[rat : "'+this.name+'"]'
}

var m = new manul("mamatha");
var n = new cat("venkat");
var r = new rat("baddi");
     
console.log(m);
console.log(n)
console.log(r)
n.manulchild();
// r.manulchild();
console.log(n.manularray.length);
console.log(n.manularray[0])
// console.log(n.manularray[1])

//eval function
var x = eval("var y=10");
console.log(y)
var z = eval("var p=9;var q=78;")
console.log(q)

var s = 20;
var l = 30;
var o = eval("s+l");
console.log(o)
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0; ";

console.log("z is ", eval(str));
