var Mouse = require('./mouse');
var Cat = require('./cat');

var tom = new Cat();
var jerry = new Mouse()

jerry.eat(tom);
console.log(jerry.stomach);