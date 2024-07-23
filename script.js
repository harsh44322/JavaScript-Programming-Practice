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
 

// function a(){
//     var x = 23;
//     b();
//     function b(){
//         var y = 24;
//         console.log(x);
//         console.log(y);
//         console.log(z);
//     }
    
// }
// var z = 25
// a();

// -------------------------------------------------------------------------------------
// Let, Const and Var
// -------------------------------------------------------------------------------------

// console.log(a); //ReferenceError: Cannot access 'a' before initialization
// this is because of temporal dead zone - the period between hoisting and initialization of value.

// let a = 10;

// let a = 20; //SyntaxError: Identifier 'a' has already been declared

// const b; //SyntaxError: Missing initializer in const declaration

// const b = 100;

// -------------------------------------------------------------------------------------
// Block and Block Scope
// -------------------------------------------------------------------------------------


// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a); //10
//     console.log(b); //20
//     console.log(c); //30
// }
// console.log(a); //10
// console.log(b); //Uncaught ReferenceError: b is not defined because b and c are block scoped.
// console.log(c);

// -------------------------------------------------------------------------------------
// Shadowing and Illegal Shadowing
// -------------------------------------------------------------------------------------

var a = 10;
let b = 20;
const c = 30;

{
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);