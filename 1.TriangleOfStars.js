function printTriangle(n) {
    function printStars(count=n) {//by default count=n
        console.log("*".repeat(count));
    }

    for (let i = 1; i <= n; i++) {
        printStars(i);
    }

    for (let i = n - 1; i > 0; i--) {//reverse loop
        printStars(i);
    }
}

printTriangle(6);