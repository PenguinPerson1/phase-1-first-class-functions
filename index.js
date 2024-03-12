function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function sayHi() {
        console.log("Hi!");
    }
}
function returnsAnAnonymousFunction() {
    return () => console.log("Hello!");
}