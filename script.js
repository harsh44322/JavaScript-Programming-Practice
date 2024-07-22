// -------------------------------------------------------------------------------------
// Hoisting...
// -------------------------------------------------------------------------------------


// var Hworld = "Hello World";

// console.log(Hworld);
// getName();
// console.log(x);
// console.log(getName1);
// console.log(getName);
// console.log(getName2);

// var x = 9;

// function getName(){
//     console.log("Hello World");
// }

// var getName1 = () => {
//     console.log("This is arrow function");
// }

// var getName2 = function(){
//     console.log("function 2")
// }
// getName();
// console.log(x);
// console.log(getName1);
// console.log(getName);
// console.log(getName2);

// -------------------------------------------------------------------------------------
// Working of functions
// -------------------------------------------------------------------------------------

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     // var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }


// -------------------------------------------------------------------------------------
// Scope, Scope Chain and Lexical Environment
// -------------------------------------------------------------------------------------
 

function a(){
    var x = 23;
    b();
    function b(){
        var y = 24;
        console.log(x);
        console.log(y);
        console.log(z);
    }
    
}
var z = 25
a();

// -------------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------------