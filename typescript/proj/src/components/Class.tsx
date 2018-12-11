import * as React from "react";

export interface Props { 
}

export class Class extends React.Component<Props, {}> {
    
    render() {
        let greeter = new Greeter("world");
        const dog = new Dog();
        dog.move(12);
        dog.bark();
        return (<div>
                    <h1>class</h1>
                    <h1>{greeter.greet()}</h1>
                </div>);
    }
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
