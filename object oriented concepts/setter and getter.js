﻿
        //object way of seter and geter

        var obj = {
            street: 'no street',
            city:'no city',
            state: 'no state',

            get getmethode() {
                return "My address is " + this.street +", "+this.city+", "+ this.state;
            },

            set setmethode(address){
                var parts = address.toString().split(', ')
                this.street = parts[0] || "";
                this.city = parts[1] || "";
                this.state = parts[2] || "";

                
            }
        }

obj.setmethode = "123 main road , nandyala , AP "

document.write(obj.getmethode);


//another way function using seter and geter

function math() {
    this.longitude = 0;
    this.latitude = 0;
};

        
Object.__defineGetter__.call(math.prototype, "getmath", function() {
    return "math values " + this.longitude + ", " + this.latitude;

})
Object.__defineSetter__.call(math.prototype, "setmath", function (values) {
    var val = values.toString().split(", ");
    this.longitude = val[0];
    this.latitude = val[1];
});

var coordinates = new math();
coordinates.setmath="10.78 , 22.65"
document.write(coordinates.getmath)
