//object.create function with parameters
var obj1 = {
    a: 'osi', b: 'technologies',
    getdata: function (name) {
        console.log(name)
    }
}

var obj2 = Object.create(obj1, {
    p: { value: 10, enumarable: true, writeable: true, configarable: true }, q: { value: 10, enumarable: true, writeable: true, configarable: true }
})

console.log(obj2.a);
console.log(obj2.p);
console.log(obj2.q);
console.log(Object.getOwnPropertyDescriptor(obj2, 'q'));
obj2.getdata





