
    function campaign() {
        this.items = "no items";
        this.things = "no things";
    }


Object.defineProperty(campaign.prototype, 'setgetmethode', {
    get:function() {
        return this.items + ", " + this.things;
    },

    set:function(item) {
        var val = item.split(",");
        this.items = val[0];
        this.things = val[1];
    }
})


var cam = new campaign();

cam.setgetmethode = "bag,papers";
document.write(cam.setgetmethode)

//anoter way
function circle(radies) {
    this.radies = radies;
}

circle.prototype = {
    set setmethod(value) {
        this.radies = value;
    },

    get getmethode() {
        return this.radies;
    },
    get area(){
        return Math.PI * (this.radies * this.radies);
    }
}

var c = new circle(2.5);
c.setmethod = "10";
document.write(c.getmethode)
document.writeln(c.area)


var lead = {
    name: "no name",
    age:'not mestion'
}

Object.defineProperty(lead, 'lead1', {
    get:function(){
        return name + age
    },
    set: function (val) {
        var d = val.split(" ,");
        name = d[0];
        age = d[1];

    }
})

lead1.set= "mamatha , 24";
console.log(lead1.get)


