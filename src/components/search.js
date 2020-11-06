import React from 'react';

class Search extends React.Component{
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Nhap tu khoa..." />
                <i className="search icon"></i>
            </div>
        )
    }
}
export default Search