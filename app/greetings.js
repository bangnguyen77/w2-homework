var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.message;
    };
    return Greeter;
}());
var greeters = [];
greeters.push(new Greeter("World"));
greeters.push(new Greeter("how are you"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    alert(greeter.greet());
}
// class Greeter {
//   greeting: string;
//
//   constructor (message: string) {
//     this.greeting = message;
//   }
//
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }
//
// var greeters: Greeter[] = [];
// greeters.push(new Greeter("World"));
// greeters.push(new Greeter("how are you"));
// greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
// console.log(greeters);
// for(var greeter of greeters) {
//   alert(greeter.greet());
// }
