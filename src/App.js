import React, { Component } from 'react'
import {v1 as uuid} from 'uuid';
import  'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './Component/TodoList';
import TodoInput from './Component/TodoInput';


export default class App extends Component {
  state = {
    items:[
      {id:1, title:'weak up'},
      {id:1, title:'makebreakfast'}],
      id:uuid(),
      item: '',
      editItem: false
  };

  handleChange=()=>{

  }

  handleSubmit=()=>{

  }

  clearList=()=>{};
  handleDelete=(id)=>{};
  handleEdit=(id)=>{}
  render() {
    console.log(this.state.items);
    console.log(this.state.items.id);
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    )
  }
}
