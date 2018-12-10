import * as React from "react";
export enum Color {Red = 'a', Green = 'b', Blue = 'c'};

export interface Props { 
    isBoolean: boolean; 
    num: number; 
    str: string;
    list: string[];
    tuple: [string,number];
    object: object;
}

export const BaseType = (props: Props) => 
    <div>
        <h2>Boolean: {`${props.isBoolean}`}</h2>
        <h2>Number: {props.num}</h2>
        <h2>String: {props.str}</h2>
        <h2>List: {props.list}</h2>
        <h2>Tuple: {props.tuple}</h2>
        <h2>Object: {props.object.toString()}</h2>
        <h2>如果不确定类型可以这样写 <p style={{color: 'red'}}>let notSure: any = 4;</p></h2>
    </div>;
