import React, { Component } from 'react'
import TodoList from './Component/TodoList';
import TodoInput from './Component/TodoInput';
import uuid from 'uuid';
import  'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    )
  }
}
