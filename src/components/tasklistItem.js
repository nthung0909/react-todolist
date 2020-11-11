import React from 'react';

class TaskListItem extends React.Component{
    constructor(props) {
        super (props);
    }
    onDeleteTodo=(id)=>{
        console.log(id);
    }
    render() {
        var todoItem=this.props;
        return (
            <tr>
                <td>{todoItem.taskItem.id}</td>
                <td>{ todoItem.taskItem.name }</td>
                <td>{todoItem.taskItem.status===-1?"Bi huy":(todoItem.taskItem.status===1?"Da xong":"Dang lam")}</td>
                <td className="right aligned"><i className="close icon red" onClick={this.onDeleteTodo(todoItem.taskItem.id)}></i>
                    &nbsp;&nbsp;<i className="icon pencil green"></i></td>
            </tr>
        )
    }
}
export default TaskListItem;