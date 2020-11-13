import React from 'react';
import Sort from "./sort";
import Search from "./search";

class Control extends React.Component{
    constructor(props) {
        super (props);
    }
    // onSearchChange=(key)=>{
    //     console.log(key);
    // }
    render() {
        return (
            <div className="ui search">
                <br/>
                {/*search*/}
                <Search onSearchChange={this.props.onSearchChange}/>
                &nbsp;&nbsp;&nbsp;
                {/*sort*/}
            </div>
        )
    }
}
export default Control