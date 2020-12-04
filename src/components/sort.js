import React from 'react';

class Sort extends React.Component{
    constructor(props) {
        super (props);
    }
    onSelectChange=(event)=>{
        this.props.onSelectChange(event.target.value);
    }
    render() {
        return (
                <select className="ui dropdown sortDropdown" name="sortTodo" id="sortTodo" onChange={this.onSelectChange}>
                    <option selected value="1">Ten CV</option>
                    <option value="2">Trang Thai</option>
                </select>
        )
    }
}
export default Sort;