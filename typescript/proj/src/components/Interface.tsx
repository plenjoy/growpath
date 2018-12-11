import * as React from "react";

export interface Props { 
    compiler: string; 
    framework: string;
    readonly ro: string; //只读属性
    color?: string; //可选属性
    (source: string, subString: string): boolean; //方法属性
}

export class Interface extends React.Component<Props, {}> {
    
    render() {
        return <h1>interface</h1>;
    }
}