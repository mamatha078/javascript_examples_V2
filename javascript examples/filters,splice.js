
        //filters examples
        var array = [17,60,50,14,32,24,16,18];

function checkage(age) {
    return age >= 18;
}

function myfun() {
    document.getElementById("demo").innerHTML = array.filter(checkage);
}

// filetrs

var isarray=['mamatha','venkat','bekkem','eswar','mamatha','eswar']

var result = isarray.filter(function (value, index, array) {
    return array.indexOf(value) === index;
})
console.log("duplication remove using filters :"+result);

//splice in javascript

     
document.getElementById("demo1").innerHTML = isarray;

function myFunction() {
    isarray.splice(2, 0, "pavan", "bhavani");
    document.getElementById("demo1").innerHTML = isarray;
}
myFunction();
var newarray = ['bus', 'car', 'bike']
       
newarray.splice(2, 1, "arjun", "hanni");
console.log(newarray)
var newarray = ['bus', 'car', 'bike','red']

newarray.splice(2, 1);
console.log(newarray);
var newarray = ['bus', 'car', 'bike']

newarray.splice(2);
console.log(newarray)

