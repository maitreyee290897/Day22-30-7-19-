// JavaScript source code
class Employee {
    constructor(firstName, lastName, age, salary) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._salary = salary;
    }
    /*
    setFirstName(fname) {
        this.firstName = fname;
    }
    setLastName(lname) {
        this.lastName = lname;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    setAge(age) {
        this.age = age;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastNmae() {
        return this.lastName;
    }
    getSalary() {
        return this.salary;
    }
    getAge() {
        return this.age;
    }
    */

    set firstName(fname) {
        this._firstName = fname;
    }
    set lastName(lname) {
        this._lastName = lname;
    }
    set salary(salary) {
        this._salary = salary;
    }
    set age(age) {
        this._age = age;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get salary() {
        return this._salary;
    }
    get age() {
        return this._age;
    }
}

class ReghularEmployee extends Employee {

    constructor(firstName, lastName, age, salary, vacationDays) {
        super(firstName, lastName, age, salary)
            this._vacationDays = vacationDays;
        }
    }


let regularEmp = new ReghularEmployee('foo', 'bar', 23, 2400, 90);
console.log(regularEmp);


/*let emp1 = new Employee('foo', 'bar', 23, 2400);
console.log(emp1);
emp1.firstName = 'maitreyee';
console.log(emp1.firstName);*/
//emp1.setFirstName('thisFoo');
//console.log(emp1.getAge());
//console.log(emp1);
//let emp2 = new Employee('vikram', 'sharma', 23, 2400);
//console.log(emp2);
