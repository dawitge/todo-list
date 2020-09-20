import React, { Component } from 'react'
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>TodoInput</h1>
                <div className='col-4 bg-warning'>hello</div>
                <div className='col-4 bg-danger'>hello</div>
                <div className='col-4 bg-primary'>hell0o</div>
            </div>
        )
    }
}
