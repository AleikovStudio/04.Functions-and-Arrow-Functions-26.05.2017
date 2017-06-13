function sum() {//parameter(s)
    console.log("args count: " + arguments.length);
    console.log(arguments);

    let sum = 0;
    for (let x of arguments) {
        sum += x;
    }
    console.log("sum= " + sum);
}

sum(4,2,3);//these are the arguments