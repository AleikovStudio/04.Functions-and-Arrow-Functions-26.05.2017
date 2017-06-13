////////////////////////////////////////////primer 1:
let f = function (a, b) {
    return a + b;
};

console.log(f(5, 6));

//kato gorniya primer 1 samo che s arrow:
let q = (a, b)=>a + b;
console.log(q(5, 6));

////////////////////////////////////////////primer 2:
let increment = function (x) {
    return x + 1;
};

console.log(increment(6));

//kato gorniya primer 2 samo che s arrow:

let incrementTwo = x => ++x;
console.log(incrementTwo(6));
console.log(incrementTwo(6));

////////////////////////////////////////////primer 3:
let sum = (a, b)=> a + b;
console.log(sum(5, 16));

////////////////////////////////////////////primer 4 s array:
[10, 20, 23, 432, 343, "text"].forEach(x=>console.log(x));

////////////////////////////////////////////primer 5:
console.log([10, 20, 30].filter(a=>a > 15));

////////////////////////////////////////////primer 6:
console.log([10, 20, 30].map(a=>a * 2));


