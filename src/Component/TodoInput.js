import React, { Component } from 'react'

export default class TodoInput extends Component {
    
    render() {
        const {item,handleChange,handleSubmit,handleDelete,handleEdit}=this.props;
        return (
            <div>
                <h2>TodoInput</h2>
                <div className='card card-body my-3'>
                    <form onSubmit={handleSubmit}> 
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fas fa-book' />
                            </div>
                        </div>
                        <input type='text' className='form-control text-capitalize' placeholder='add todo item' value={item} onChange={handleChange} />
                        <button type='submit' className='btn btn-block btn-primary mt-3 text-uppercase'>Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}
