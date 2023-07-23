function receivesAFunction(callback) {
callback();
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function!");
    }
    return namedFunction;
}


function returnsAnAnonymousFunction() {
    function anonymousFunction() {
        console.log("This is an anonymous function!");
    }
    return anonymousFunction;
}


