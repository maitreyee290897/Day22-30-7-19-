/*
let timeOut = function (timeout = 2000, message = "default") {
    setTimeout(function () {
        console.log(`${message} after ${timeout} seconds`)
    } , timeout, message)
}
timeOut(1000, "from function call");
*/

//function to array function 
/*
let timeOut = function (timeout = 2000, message = "default",m1="ll") {
    setTimeout((msg,m)=> {
        console.log(`${msg} after ${timeout} seconds ${m}`)
    }, timeout*1000, message,m1)
}
timeOut(5, "from function call", "pppp");
*/

let handle;
let timeOutInterval = (timeOutInMills = 2000, message = "Default msg!!!") => {
    handle = setInterval((msg) => {
        console.log(`${msg} executed ${timeOutInMills} seconds`);
    }, timeOutInMills * 1000, message)
}

timeOutInterval(1, "called after every second");
console.log(`this is printed before timeout..`);
setTimeout(() => {
    console.log(`lets terminate the interval .....`); 
    clearInterval(handle);
}, 5000);