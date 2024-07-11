// function add(){
//     console.log("Hello");
// }

// add(); // function call

/* parameterized function */

// function sum(a,b){
//     return a + b;

// }

// function sum(a,b){
//     console.log("total is: ",a + b);
// }

// sum(10,20);

/* constructor */

// let data = new Function("a","b", "return (a * b)");

// console.log(data(10,20));


/* IIFE */

{
    // (function hello(a,b){
    //     console.log(a * b);
    // })(11,11);
}

/* function as a variable (anonymous function) */

{
    // let data = function (a,b){console.log(a+ b)};

    // data(10,10);
}


/* arrow function */

let hello = (a,b,c) => {
    console.log("fist value is : ", a);
    console.log("second value is : ", b);
    console.log("third value is : ", c);
}

hello(10,20,30);