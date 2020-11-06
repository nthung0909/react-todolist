import React from 'react';
import Sort from "./sort";
import Search from "./search";

class Control extends React.Component{
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <div className="ui search">
                <br/>
                {/*search*/}
                <Search/>
                &nbsp;&nbsp;&nbsp;
                {/*sort*/}
                <Sort/>
            </div>
        )
    }
}
export default Control