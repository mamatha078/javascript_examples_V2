
        function getvalue() {
            var pwelcome = document.getElementById("welcome");

            var textval = document.getElementById("txtid");

            pwelcome.innerHTML = "welcome " + textval.value;
        }


//array methodes

var d = ["car", 'bike', 'buss'];
var n = ["mamatha", "venkat", "bekkem"];
var k = d.concat(n);
console.log(k);
console.log(d.length);
console.log(d.reverse());
console.log(d.join("&"));
       
//console.log(k.splice(2))
console.log(k.splice(3,1,"karthik"))
