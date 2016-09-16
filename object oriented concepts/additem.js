
        var data = [];
function data1(name) {
    this.name = name;

}
function data2(name) {
    this.name = name;
}
function data3() {
    //this.name = name;
}
data[0] = new data1("mamatha");
data[1] = new data2("venkat")
console.log(data)
var data4 = new data3();
       

var k = eval("x=10");
console.log(x)


var myarray=[34,6,99,57,7,23,46,78,27]

function checkeven(val) {
    if (val % 2 == 0) {
        return val;
    }
}
console.log(checkeven())
console.log(myarray.filter(checkeven));


//

function hero(name) {
    if (typeof hero.instance === 'object') {
        return hero.instance;
    }
    this.name = name;
    hero.instance = this;
    return this;
}

var h = new hero("arjun");
document.write(h.name)
