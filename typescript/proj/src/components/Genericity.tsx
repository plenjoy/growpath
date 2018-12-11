import * as React from "react";

export interface Props { 
}

export class Genericity extends React.Component<Props, {}> {
   
    identity<T>(arg: T): T {
        return arg;
    }
    render() {
        const animal = new Animal();
        this.identity<Animal>(animal).move(15)
        return <div>
                    <h1>Genericity</h1>
                </div>;
    }
}

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}