import * as React from "react";

export interface Props { 
    compiler: string; 
    framework: string; 
}

export class Interface extends React.Component<Props, {}> {
    
    render() {
        return <h1>interface</h1>;
    }
}