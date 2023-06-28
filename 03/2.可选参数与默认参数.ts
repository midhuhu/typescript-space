
function buildName(firstName: string, lastName: string, name?: any) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob");                  // error
// let result2 = buildName("Bob", "Adams", "Sr.","sum");  // error
let result3 = buildName("Bob", "Adams", "Sr.");
let result4 = buildName("Bob", "Adams");


function buildName2(firstName: string, lastName?: "smith") {
    return firstName + " " + lastName;
}

let res1 = buildName2("a");
// let res2 = buildName2("a", "b"); // error
let res3 = buildName2("a", "smith");
let res4 = buildName2("a", undefined);
// let res5 = buildName2("a", "b", "c"); // error

function buildName3(firstName: "bob", lastName: string) {
    return firstName + " " + lastName;
}
// let res11 = buildName3("a"); // error
let res12 = buildName3("bob", "b");