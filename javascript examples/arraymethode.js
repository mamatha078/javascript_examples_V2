
        function Employee(name, salary) {
            this.name = name;
            this.salary = salary;
            this.details = function () {
                return this.salary*12
            }

        }

var newarray = [];

newarray[0] = new Employee("mamtha", 39000);
newarray[1] = new Employee("venkat", 5000);
newarray[2] = new Employee("bekkem", 20000);
newarray[3] = new Employee("siripi", 400000);

for (var i = 0; i < newarray.length; i++) {
    var o = newarray[i];
    console.log(o.name + "and he/she salaries" + o.salary)

}
console.log(newarray)

function palindrom(str) {
    if (str.length === 0) {
        return true;
    }
    if (str[0] !== str[str.length-1]) {
        return false
    }
    var str1 = str.toString().slice(1, str.length-1);

    return palindrom(str1);


}
console.log(palindrom("madam"))

