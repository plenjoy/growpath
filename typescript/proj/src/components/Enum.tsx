import * as React from "react";

export interface Props {
    res: string;
}

export class Enum extends React.Component<Props> {
    
    constructor(props: Props){
        super(props);
    }
    
    render() {
        switch (this.props.res) {
            case Response.No:
                console.log('No');
                break;
            case Response.Yes:
                console.log('Yes');
                break;
            default:
                console.log('default');
                break;
        }
        return <div>
                    <h1>Enum</h1>
                </div>;
    }
}

enum Response {
    No = 'No',
    Yes = 'Yes'
}
