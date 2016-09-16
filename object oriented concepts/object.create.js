function A(name) {
    this.name = name;

}
A.prototype.B = function () {
    console.log(this.name);
}

var c = new A("mamatha");
c.B();

function Edata(status) {
    this.status = status;
    A.call(this, status)
}



Edata.prototype = Object.create(A.prototype);
Edata.prototype.constructor = Edata;

var F = new Edata();
F.name="book"
F.B();
function Kdata(age) {
    console.log(age)
    this.name = age;

    console.log("this is object related data" + this.empid + "," + this.ename)
    //Edata.call(this, age)

}

Kdata.prototype = Object.create(Edata.prototype);

var l = new Kdata('bekkem');
l.name = 'venkat';
l.status = 'inprogress';
l.age = 25;

l.B();

var obj = { empid: 123, ename: 'eswar', address: 'kurnool' };
Kdata.call(obj, "ositech");