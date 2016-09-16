
        var parent = {
            name: "mamatha",
            id: 123,
            getfun: function () {
                this.name="mammy"
                document.write("this is object literals examples")
            }
        }

if (parent.name === "mamatha") {
    //  parent.getfun();
}

var utilities = {
    activities: function (val) {
        for (var i in val) {
            document.write(i + " ==> "+ val[i]+ "<br/>")
        }
    }
}
utilities.activities(parent);
//console.log(parent.getfun().name)
var big = {
    name: 'venkat',
    bid: 678,
    customer: function () {
        this.cname="eswar",
       this.cid="567",
        this.ctype="pramenat"
        // this.getcustomer1 = function () {
        console.log(this.name + " <br/> " + this.cid + "<br/>" + this.ctype);
        //  }
        this.carray = [
            { vname: 'lingala', model: 'koilkuntla', dist: 'kurnoll' },
          { vname: 'nandyala', model: 'nandyala', dist: 'kurnoll' },
        {vname:'tdp',model:'tdp',dist:'anantapur'}

        ]
    },

    employee: [
        '123',"mamtha",'24','software'
    ]


}

utilities.activities(big);
console.log(big.customer())
          
function getdata() {
    this.name = "bekkem";

    this.getchild = function () {
        return  this.id = 123;

        //this.getsmall = function () {
        //   return this.h = 09;
        //}
    }

}

var d = new getdata();
console.log(d.getchild())
