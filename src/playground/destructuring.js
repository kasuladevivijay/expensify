/**
 * Destructuring in ES6
 */

const person = {
	name: 'Vijay',
	age: 26,
	location: {
		city: 'Mumbai',
		temp: 36
	}
};

// Previous usage

/*
console.log(`${person.name} is ${person.age} years old.`);

if(person.location.city && person.location.temp){
	console.log(`It's ${person.location.temp} degrees in ${person.location.city}`);
}
*/

// ES6 destructuring with default values and assigning to local names

const {name: firstName = 'Anonymous', age} = person;
// combining both default values and using local variable names
console.log(`${firstName} is ${age} years old.`);

const {city, temp: temperature} = person.location;
// can use local variables
if(city && temperature){
	console.log(`It's ${temperature} degrees in ${city}`);
}