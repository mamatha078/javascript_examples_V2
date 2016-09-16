
        //polymorphism :same name with different behaviors
        //same property name but assign different methodes
        var mytemplate = {
            get: function mymethode() {
                return this.val;
            },
            val:30
        }

var tempalte2 = Object.create(mytemplate);
tempalte2.get = function () {
    return mytemplate.get.call(this)+ "!!";
}
tempalte2.val = 100;
console.log(tempalte2.get())
