﻿
        var o= {a:2,b:4,c:{p:5,q:"mamatha"},d:"venkat",f:false,d:56}

console.log(Object.keys(o))
console.log(Object.getOwnPropertyDescriptor(o, 'a'));
console.log(Object.getOwnPropertyDescriptor(o, 'd'));
console.log(Object.getOwnPropertyDescriptor(o, 'y'));

console.log(Object.defineProperty(o, 'f', { enumerable: false }));
console.log(Object.keys(o))


var n = Object.create(o);
console.log(Object.keys(n))

console.log(n.a)
console.log(n.d);

n.k = "adc";
console.log(Object.keys(n));


//delete property

delete(o.a);
console.log(Object.keys(o))


