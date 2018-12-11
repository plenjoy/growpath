import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { BaseType } from "./components/BaseType";
import { Interface } from "./components/Interface";
import { Class } from "./components/Class";
import { Genericity } from "./components/Genericity";
import { Enum } from "./components/Enum";

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <BaseType isBoolean={true} num={0} str="String" list={['a','b','c']} tuple={['a',15]} object={{aaa:'abc'}}/>
        <Interface compiler="TypeScript" framework="React" ro="readolny" />
        <Class/>
        <Genericity/>
        <Enum res="Yes"/>
    </div>
    ,
    document.getElementById("example")
);