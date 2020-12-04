import React from 'react';

class Search extends React.Component{
    constructor(props) {
        super (props);
    }
    onSearchChange=(event)=>{
        this.props.onSearchChange(event.target.value);
    }

    render() {
        return (
            <>
                <div className="ui icon input">
                    <input className="prompt" name="search" type="text" onChange={this.onSearchChange} placeholder="Nhap tu khoa..." />
                    <i className="search icon"></i>
                </div>
            </>
        )
    }
}
export default Search