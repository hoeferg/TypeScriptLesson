"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("gayle");
signUpUser("gayle", "test@gmail.com", false);
loginUser("h", "h@h.com");
// function getValue(myVal: number): {
//     if (myVal>5) {
//         return true
//     }
//     return "200 ok"
// }
var getHello = function (s) {
    return "";
};
// const heros =["thor", "spiderman", "iron"]
var heros = ["1", "2", "3"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
