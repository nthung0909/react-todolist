import React from 'react';

class Sort extends React.Component{
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <span>
                <select className="ui dropdown selected sortDropdown" name="sortTodo" id="sortTodo">
                    <option selected value="1">Ten CV</option>
                    <option value="2">Trang Thai</option>
                </select>
            </span>
        )
    }
}
export default Sort;