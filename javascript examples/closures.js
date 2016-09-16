
        function doproccess(a,b) {

            function proccess1() {
                console.log("sum is" + (a + b))
            }

            function process2() {
                console.log("diff is" + (a - b))
            }

            proccess1();
            return process2;

        }
var r = new doproccess(20, 10);
r();

function getdata(a) {
    var b = 0;
    this.process=function() {
        return a + b;
    }
    return this.process;
}
var d =new getdata(2);
console.log(d())


function thisprocess(a, b) {

    function add() {
        console.log("sun is" + (a + b));

    }
    add();
    this.thisprocess1 = function (a,b) {
        console.log("diff is mamatha" + (a - b));
    }
            
};
var d1=new thisprocess(5, 6);
d1.thisprocess1(5, 9);