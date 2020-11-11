import './App.css';
import React,{Component} from 'react';
import TaskForm from "./components/taskForm";
import TaskList from "./components/tasklist";
import Control from "./components/control";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            tasks:[],
            showAddTodo:false
        }
    }
    componentDidMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks= JSON.parse(localStorage.getItem('tasks'));
            this.setState({tasks:tasks});
        }
        else{
            this.onGenerateData();
        }
    }
    onGenerateData = ()=>{
        var tasks=[
            {
                id:this.generateID(),
                name:"Learn reactjs",
                status:1
            },{
                id:this.generateID(),
                name:"learn Angular",
                status:0
            },{
                id:this.generateID(),
                name:"Learn Elasticsearch",
                status:-1
            }
        ];
        this.setState({tasks:tasks});
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    generateID=()=>{
        return this.generate()+this.generate()+this.generate()+this.generate()+this.generate();
    }
    generate=()=>{
        return Math.floor(Math.random()*10).toString();
    }
    onShowAddTodo = ()=>{
        if(!this.state.showAddTodo)
            this.setState({showAddTodo:true});
    }
    oncloseForm=()=>{
        this.setState({showAddTodo:!this.state.showAddTodo});
    }
    checkTodo=(todo,tasks)=>{
        let check=tasks.find(item=>{
            return item.name===todo.name;
        })
        return check?true:false;
    }
    onAddTodo=(data)=>{
        var {tasks=[]}=this.state;
        console.log("data"+data);
        console.log(this.checkTodo(data,tasks));
        if(this.checkTodo(data,tasks)){
            alert("Ten cong viec phai la duy nhat");
            return;
        }
        data.id=this.generateID();
        tasks.push(data);
        this.setState({tasks:tasks});
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    render(){
        return (
            <div className='ui container'>
                <br/><br/>
                <div className='row'>
                    <div className={this.state.showAddTodo?'ui two column grid':'ui one column grid'}>
                        {this.state.showAddTodo?<TaskForm oncloseForm={this.oncloseForm}
                                                          showAddTodo={this.state.showAddTodo}
                                                          onAddTodo={this.onAddTodo}/>:''}
                        <div className={this.state.showAddTodo?"eleven wide column todolistGroup":"sixteen wide column todolistGroup"}>
                            <button className="button ui blue" type="button" onClick={this.onShowAddTodo}>
                                <i className="add icon"></i>Them cong viec
                            </button>
                            {/*Control*/}
                            <Control/>
                            {/*TaskList*/}
                            <TaskList tasks={this.state.tasks} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
