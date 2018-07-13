import React, { Component } from 'react';

import Todos from'./Components/Todos/Todos';

// import Projects from './Components/Projects';
// import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // projects: [],
      todos: []
    }
  }

  // getProjects(){
  //   this.setState({projects: [
  //     {
  //       title: 'Business website',
  //       category: 'Web Design'
  //     },
  //     {
  //       title: 'Social App',
  //       category: 'Mobile Development'
  //     },
  //     {
  //       title: 'Ecommerce Shopping Cart',
  //       category: 'Web Development'
  //     },
  //   ]});
  // }

  componentWillMount(){
    // this.getProjects();
  }



  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  
  render() {
    return (
      <div className="App">
         <Todos />
      </div>
    );
  }
}

export default App;
