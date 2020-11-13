import React from 'react';

class TaskListItem extends React.Component{
    constructor(props) {
        super (props);
        this.state={
            isEdit:false,
            name:'',
            status:'',
            id:''
        }
    }
    onDeleteTodo=()=>{
            this.props.onDeleteTodo(this.props.taskItem.id);
    }
    onEditClick=()=>{
        this.setState({isEdit:true,name:this.props.taskItem.name,
            id:this.props.taskItem.id, status:this.props.taskItem.status});
    }
    render() {
        var todoItem=this.props;
        var editElement=<tr className="editTask">
            <td>{todoItem.taskItem.id}</td>
            <td><input className="ui input" type="text" name="name" value={this.state.name}/></td>
            <td><select name="status" value={this.state.status}>
                <option value="0">Dang lam</option>
                <option value="1">Da xong</option>
                <option value="-1">Bi huy</option>
            </select></td>

            <td className="right aligned"><i className="close icon red" onClick={this.onDeleteTodo}></i>
                &nbsp;&nbsp;<i className="icon pencil green" onClick={this.onEditClick}></i></td>
        </tr>;
        var element=<tr>
            <td>{todoItem.taskItem.id}</td>
            <td>{ todoItem.taskItem.name }</td>
            <td>{todoItem.taskItem.status==-1?"Bi huy":(todoItem.taskItem.status==1?"Da xong":"Dang lam")}</td>
            <td className="right aligned"><i className="close icon red" onClick={this.onDeleteTodo}></i>
                &nbsp;&nbsp;<i className="icon pencil green" onClick={this.onEditClick}></i></td>
        </tr>;
        return (
            this.state.isEdit? editElement:element
        )
    }
}
export default TaskListItem;