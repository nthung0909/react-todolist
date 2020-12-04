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
                <Search onSearchChange={this.props.onSearchChange}/>
                &nbsp;&nbsp;&nbsp;

                {/*sort*/}
                <Sort onSelectChange={this.props.onSelectChange}/>
            </div>
        )
    }
}
export default Control