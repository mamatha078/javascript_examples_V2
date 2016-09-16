
       var mymethode = {
           get: function mychild() {
               return this.val;
           },
           val : 24
       }
//  console.log(mymethode.get())

var obj = {
    val:35
}
console.log(mymethode.get.call(obj));

function getmethode(a) {
    console.log(this)
    return this.val;
}
var k = new getmethode();
var object1 = {
    get1: getmethode,
    val:88
}
object1.name = "arjun";

var object2 = {
    get1: getmethode,
    val:100
}
      
//console.log(object1.get1())
//console.log(object2.get1());

console.log(getmethode.apply(object1, ["mamatha"]));
 
