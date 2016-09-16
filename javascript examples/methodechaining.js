
        function methodechain(name,age,salary) {
            this.name = name;
            this.age = age;
            this.salary = salary;
            this.incrementsalary = function (sal) {
                this.salary += sal ;
                return this;
            }
        }

var d = new methodechain('venkat', 24, 16000);
console.log(d.salary)
var a = d.incrementsalary(500);
        
console.log(d.incrementsalary(1000).incrementsalary(1000).incrementsalary(1000).incrementsalary(1000).salary)
