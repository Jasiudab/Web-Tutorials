import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            todos: [],
            displayed: [],
            mode: null
        };
      }

    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                todos: result,
                displayed: result
              });              
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ); 
          
      }

    loadIncompleted(){
        this.setState({
            displayed: this.state.todos.filter(todo => !todo.completed),
            mode: 'incompleted'
        });        
    }

    loadCompleted(){
        this.setState({
            displayed: this.state.todos.filter(todo => todo.completed),
            mode: 'complete'
        });        
    }

    loadAll(){
        this.setState({
            displayed: this.state.todos,
            mode: 'all'
        }); 
    }

    refresh(){
        switch(this.state.mode) {
            case 'all':
                this.loadAll()
                break;
            case 'complete':
                this.loadCompleted()
                break;
            case 'incomplete':
                this.loadIncompleted()
                break;
            default:
                break;
        }
    }

    handleComplete(id){
        let todos = this.state.todos;

        let index = todos.findIndex(x => x.id === id);
        todos[index].completed = true;
        
        this.setState({
            todos: todos
        });

        this.refresh();
    }

    render() {
        const { error, isLoaded } = this.state;

        // let todos;
        // if(this.state.todos){
        //     todos = this.state.todos.map(todo => {
        //         //console.log(project);    
        //         return(
        //             <Todo key={todo.id} todo={todo} />
        //         )   
        //       });
        // }
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return(
                <div className="Todos">
                    <strong><a onClick={this.loadAll.bind(this)}> All</a></strong><br />
                    <strong><a onClick={this.loadCompleted.bind(this)}> Completed</a></strong><br />
                    <strong><a onClick={this.loadIncompleted.bind(this)}> Incompleted</a></strong><br />

                    {this.state.displayed.map(todo => (
                        <Todo onComplete={this.handleComplete.bind(this)} key={todo.id} todo={todo} />
                    ))}
                </div>
            );
        }
    }
}

export default Todos;
