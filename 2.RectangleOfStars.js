function squareOfStars(n) {
    function printStars(count = n) {
        console.log("*" + " *".repeat(count - 1));
    }

    for (let i = 1; i <= n; i++) {
        console.log("*" + " *".repeat(n - 1));
        printStars();
    }
}

squareOfStars(10);

//2nd solution
function printSq(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*" + " *".repeat(n - 1));
    }
}

printSq(40);