
         parent={
             get: function mymethode() {
                 return this.val;
             },
             val:20
         }

//var p = new parent();
var child = Object.create(parent);

child.val = 30;

var nextchild = Object.create(child);
nextchild.val = 40;

console.log(parent.get())
console.log(child.get())
console.log(nextchild.get())

       
