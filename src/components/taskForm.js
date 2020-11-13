import React from 'react';

class TaskForm extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            name:'',
            status:0
        };
    }
    componentDidMount() {
        var {tasks,showAddTodo}=this.props;
        //console.log(showAddTodo);
    }

    onCloseForm=()=>{
        this.props.oncloseForm();
    }
    onValueChange=(event)=>{
        let target=event.target;
        let name=target.name;
        let value=target.value;
        this.setState({
            [name]:value
        });

    }
    onAddTodo=(event)=>{
        event.preventDefault();
        this.props.onAddTodo(this.state);
    }
    oncloseForm=()=>{
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
                <form className='ui form' onSubmit={this.onAddTodo}>
                    <div className="field">
                        <label>Ten CV:</label>
                        <input name='name' type="text" placeholder="nhap cong viec..."
                               onChange={this.onValueChange} value={this.state.name}/>
                    </div>
                    <div className="field">
                        <label>Ten CV:</label>
                        <select className="ui selection dropdown" name="status" id="status"
                                onChange={this.onValueChange} value={this.state.status}>
                            <option value={0}>Dang lam</option>
                            <option value={1}>Da xong</option>
                            <option value={-1}>Bi huy</option>
                        </select>
                    </div>
                    <div className="field groupButtonAction">
                        <button className="ui button blue" type="submit">Them</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="ui button red" onClick={this.oncloseForm} type="button">Huy</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskForm;