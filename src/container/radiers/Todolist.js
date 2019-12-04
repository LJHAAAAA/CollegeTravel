import Todoinput from './Todoinput';
import Todoing from './Todoing';
import React, { Component } from 'react';

export default class Todolist extends Component {
	constructor(){
        super();
        let todo0 = localStorage.getItem('todo0');
        if(todo0 == null){
          this.state = {
            todo:[]
		      }
        }
        else{
          this.state = {
            todo:todo0
		      }
        }
	}
  addItem=(data)=>{
    var data1 = {"key":data,"checked":false}
    this.setState({
      todo:[...this.state.todo,data1]
  })   
  }
	delItem = (idx)=>{
       this.setState((state,props)=>{
            console.log(state.todo);
            return {
                todo: state.todo.filter((item,index)=>idx!==index)
            }
    })
      }
  render() {
    let doing=0;
    this.state.todo.forEach((item)=>{
        if(item.checked == false){
            doing++;
        }
    })
    localStorage.setItem('key',JSON.stringify(this.state.todo));
    return (
      <div>
		    <Todoinput add={this.addItem}/>
        <Todoing del={this.delItem} todo={this.state.todo}  doing={doing} />
      </div>
    );
  }
}
