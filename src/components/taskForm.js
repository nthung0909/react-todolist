import React from 'react';

class TaskForm extends React.Component{
    constructor(props) {
        super(props);
        this.state=props;
    }
    componentDidMount() {
        var {tasks,showAddTodo}=this.props;
        console.log(showAddTodo);
    }

    onCloseForm=()=>{
        this.props.oncloseForm();
    }
    render() {
        return (
            <div className="five wide column addTodoGroup">
                <h3 className="addTodoHeader">Them cong viec
                    <button type="button" onClick={this.onCloseForm}>
                        <i className="cancel icon red"></i>
                    </button>
                </h3>
                <form className='ui form'>
                    <div className="field">
                        <label>Ten CV:</label>
                        <input name='todoName' type="text" placeholder="nhap cong viec..."/>
                    </div>
                    <div className="field">
                        <label>Ten CV:</label>
                        <select className="ui selection dropdown" name="todoStatus" id="todoStatus">
                            <option selected value={0}>Bi huy</option>
                            <option value={1}>Kich hoat</option>
                            <option value={2}>An</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskForm;