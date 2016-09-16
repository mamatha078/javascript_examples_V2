
        function myfirst(val) {
            this.val=val;
        }

myfirst.prototype.get = function f1() {
    return this.val;
}

var f = new myfirst(100);
console.log(f.get());

function mysecond(val) {
    return myfirst.call(this,val)
}

mysecond.prototype = Object.create(myfirst.prototype);

     

mysecond.prototype.get = function f2() {
    return myfirst.prototype.get.call(this);
}

var n = new mysecond(200);
console.log(n.get());


