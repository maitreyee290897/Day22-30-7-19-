// JavaScript source code
let vehicle = {}

let goodsvehicle = {}

let passengersvehicle = {}

vehicle

vehicle.commute = function (startLoc, endLoc) { console.log(`commuting from ${startLoc} till ${endLoc}`) }

vehicle

goodsvehicle

goodsvehicle.__proto__ = vehicle

passengersvehicle.__proto__ = vehicle

goodsvehicle.commute('banglore', 'chennai')

passengersvehicle.commute('bang', 'che')
