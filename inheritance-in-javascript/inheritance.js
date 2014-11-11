//http://aaditmshah.github.io/why-prototypal-inheritance-matters/
//http://stackoverflow.com/questions/16785000/inherit-the-prototype/16785562#comment24188353_16785562

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//ex1
var author = new Person("Aadit", "Shah");

//ex2
var author = new Person.apply(null, ["Aadit", "Shah"]); // error

//ex3
var author = Person.new.apply(Person, ["Aadit", "Shah"]);

//"new" method 
Function.prototype.new = function () {
     function functor() { return constructor.apply(this, args); }
     var args = Array.prototype.slice.call(arguments);
     functor.prototype = this.prototype;
     var constructor = this;
     return new functor;
 };

 /*
 There are two ways to create new objects
 	1) ex nihilo (“out of nothing”) object creation 
 	2) cloning an existing object.
*/

// method #1
var object = Object.create(null);
//
var object = {} /* OR */ new Object(); /* OR */ Object.create(Object.prototype);

//method #2
var rectangle = {
    area: function () {
        return this.width * this.height;
    }
};
var rect = Object.create(rectangle);

//Prototypal Pattern
 1 var rectangle = {
 2     create: function (width, height) {
 3         var self = Object.create(this);
 4         self.height = height;
 5         self.width = width;
 6         return self;
 7     },
 8     area: function () {
 9         return this.width * this.height;
10     }
11 };
12 
13 var rect = rectangle.create(5, 10);
14 
15 alert(rect.area());

// normal constructor pattern 
 1 function Rectangle(width, height) {
 2     this.height = height;
 3     this.width = width;
 4 }
 5 
 6 Rectangle.prototype.area = function () {
 7     return this.width * this.height;
 8 };
 9 
10 var rect = new Rectangle(5, 10);
11 
12 alert(rect.area());
