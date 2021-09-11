(() => {
    console.log('Hello');
	// console.warn('Warning, Something is not right.');
	// console.info('Some information');
})

function Person(fname, surname){
	this.fname = fname;
	this.surname = surname;
}

const me = new Person('John','Smith');
console.table(me);

console.time("function");

var a = 522;
var b = 642;

var sum = (a + b);

console.log(sum);

console.log('%c%s', 'color:goldenrod; background-color: forestgreen; font-size: 2em;', 'Success!');

console.log('%c%s','color:firebrick; background-color: #dfdfdf; font-size: 2em;','Error occured.');

console.log('%c%s', 'color:firebrick; background-color: #dedede; font-size: 2em;', 'Error occured.');

console.timeEnd("function");
