const User = function (name, surname) {
    this.fname = name;
    this.lname = surname;
    console.log(this);
}

User.prototype.getFirstName = function () {
    return this.fname;
}

User.prototype.getLastName = function () {
    return this.lname;
}

User.prototype.getFullName = function () {
    return `${this.fname} ${this.lname}`;
}

//1
/*
 let u = User();
console.log(u);
*/
/*
let u = new User();
console.log(u);
*/
//2
/*
let u = User('ravi','sha');
console.log(u);
*/

/*
let u = new User('ravi', 'sha');
console.log(u);
*/
//3
let u = new User('ravi', 'naik');
console.log(u.getFullName());
