
        function doprocess(a,b) {

            function additem(a,b) {
                console.log("sum is " +  (a + b).toString());
            }
            additem(a,b);

            doprocess = function (a,b) {
                console.log("diff is " + (a - b).toString());
            }
        }

doprocess(10, 20);
doprocess(10, 20);
doprocess(20, 50);


//anonymous and self invoking functions

var r = (function (a, b) {
    var c = 0;
    return c = a + b;
})(10,60);

console.log(r)
