
        var Person = function () {
            console.log(this.constructor.arguments[0])
            this.canTalk = true;
        };

Person.prototype.greet = function () {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.name);
    }
};

var Employee = function (name, title) {
    Person.call(this);
    this.name = name;
    this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function () {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.name + ', the ' + this.title);
    }
};

var Customer = function (name) {
    Person.call(this);
    this.name = name;
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

var Mime = function (name) {
    Person.call(this);
    this.name = name;
    this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

console.log(bob.greet());
// Hi, I am Bob, the Builder

console.log(joe.greet());
// Hi, I am Joe

console.log(rg.greet());
// Hi, I am Red Green, the Handyman

console.log(mike.greet());
// Hi, I am Mike

console.log(mime.greet());