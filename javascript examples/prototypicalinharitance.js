
       var myfirst = {
           constructor: function f1(val) {
               this.val = val;
           },
           get: function f2() {
               return this.val;
           },
           val:20

       }

var mysecond = Object.create(myfirst);
mysecond.constructor(14)
console.log(mysecond.get());

var mythird = Object.create(myfirst);
mythird.constructor(34);
console.log(mythird.get())

var myforth = Object.create(myfirst);
myforth.get = function () {
    return myfirst.get.call(this)+" !!";
}
myforth.constructor(500)
console.log(myforth.get())

