function printName(firstName, lastName) {//parameters
    let name = firstName;
    if (lastName != undefined) {
        name += " " + lastName;
    }
    console.log(name);
}

printName("Maria", "Nikolova");//arguments

//printName = function (firstName, lastName) {
//    let name = firstName;
//    if (lastName != undefined) {
//        name += " " + lastName;
//    }
//    console.log(name);
//};
//
//printName("Maria", "Nikolova");

