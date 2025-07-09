// Simple test for Greeting
const Greeting = require('./greeting');

console.log('Testing Greeting Module...');

const greet = new Greeting('Developer');
console.log('Test 1:', greet.sayHello());
console.log('Test 2:', greet.sayGoodbye());

console.log('All tests completed!');
