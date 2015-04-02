
function test(belongs, to){
	return belongs + ' ' + to + ' ' + this.example
}

var object = {
	example: 'example'
}

var belongs = 'belongs';
var to = 'to';

console.log(test(belongs, to))   // returns undefined
console.log(test.call(object, belongs, to)); // returns 'example'