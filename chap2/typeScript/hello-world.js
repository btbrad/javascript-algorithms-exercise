var myName = 'bt';
myName = '10';
function printName(person) {
    console.log(person.name);
}
var mike = { name: 'mike', age: 20 };
var jane = { name: 'jane', age: 30, phone: '1234567899911' };
printName(mike);
printName(jane);
var myObj = /** @class */ (function () {
    function myObj() {
    }
    myObj.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return myObj;
}());
var myObjTwo = /** @class */ (function () {
    function myObjTwo() {
    }
    myObjTwo.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return myObjTwo;
}());
