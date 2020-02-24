var Cat = require('./cat')

var tom = new Cat();

function Mouse() {
	this.stomach = [];
	this.eat = function () {
		this.stomach.push(tom);
	}
}

module.exports = Mouse;