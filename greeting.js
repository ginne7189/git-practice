// Greeting Module
class Greeting {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        return `Hello, ${this.name}! Welcome to PR practice.`;
    }
    
    sayGoodbye() {
        return `Goodbye, ${this.name}! See you next time.`;
    }
}

module.exports = Greeting;
