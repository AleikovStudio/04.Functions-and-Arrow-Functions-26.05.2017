//Immediately invoked function expression (IIFE)

(function (count) {
    for (let i = 1; i <= count; i++) {
        console.log("+".repeat(i));
    }
})(4);

(function (x) {console.log(2 * x);})(5);


//The code below is an example of IIFE (immediately invoked function expression) and "closure": a state is closed inside
let f =(function(){
    let x = 0;
    return function(){console.log(++x);}
})();