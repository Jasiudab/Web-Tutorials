import React, { Component } from 'react';

class Todo extends Component {

    complete(){
        this.props.onComplete(this.props.todo.id);
    }


    
  render() {
    let todo = this.props.todo;
    let completeButton;

    let className = 'todo';
    if(!todo.completed){
        completeButton = <a onClick={this.complete.bind(this)}> X</a>
        className += ' incomplete';
    }


    return (
        <li className={className}>
            <strong>{todo.id}</strong> - {todo.title} 
            {completeButton}
        </li>             
    );
  }
}

export default Todo;
