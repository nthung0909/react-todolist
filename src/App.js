import './App.css';
import React,{Component} from 'react';
import taskForm from "./components/taskForm";

class App extends Component{
    constructor(supers) {
        super(supers);
        this.state={
            todo:[
                {
                    name:'Learn React js',
                    status:0
                }
            ]
        }
    }

    render(){
        let element=this.state.todo.map((item,index)=>{
            return (
            <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td className="right aligned"><i className="close icon red"></i>&nbsp;&nbsp;<i className="icon pencil green"></i></td>
            </tr>);
        })
      return (
          <div className='ui container'>
              <br/><br/>
              <div className='row'>
                  <div className='ui two column grid'>
                      <taskForm/>
                      <div className="eleven wide column todolistGroup">
                          <button className="button ui blue" type="button"><i className="add icon"></i>Them cong viec</button>

                          <div className="ui search">
                              <br/>
                              <div className="ui icon input">
                                  <input className="prompt" type="text" placeholder="Nhap tu khoa..." />
                                  <i className="search icon"></i>
                              </div>
                              &nbsp;&nbsp;&nbsp;
                              <select className="ui dropdown selected sortDropdown" name="sortTodo" id="sortTodo">
                                  <option value="1">Ten CV</option>
                                  <option value="2">Trang Thai</option>
                              </select>
                          </div>
                          <table className="ui selectable inverted table todosTable">
                              <thead>
                              <tr>
                                  <th>STT</th>
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
                  </div>
              </div>
          </div>
      )
    }
}
export default App;
