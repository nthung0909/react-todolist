import React from 'react';
import TaskListItem from "./tasklistItem";

class TaskList extends React.Component{
    constructor(props) {
        super (props);
        this.state={
            isEdit:false
        }
    }
    // onDeleteTodo=(data)=>{
    //     this.props.onDeleteTodo(data);
    // }
    render() {
        var {tasks}=this.props;
        let element=tasks.map((item,index)=>{
            return (
                <TaskListItem isEdit={this.state.isEdit}
                              onDeleteTodo={this.props.onDeleteTodo}
                              taskItem={item} key={index}
                                onChangeTodo={this.props.onChangeTodo}
                />
            );
        })
        return (
            <div>
                <br/>
                <table className="ui selectable inverted table todosTable">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ten cong viec</th>
                        <th>Trang thai</th>
                        <th className="right aligned">Thao tac</th>
                    </tr>
                    </thead>
                    <tbody>
                    {element}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TaskList