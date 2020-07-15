import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    Persons: [
      { name: 'Sharad', age: '33' },
      { name: 'Sandeep', age: '29' },
      { name: 'Kanchan', age: '30' }
    ],
    otherState: 'some other data!'
  }

  switchNameHandler = (newName) => {
    this.setState({
      Persons: [
          { name: newName, age: '33' },
          { name: 'Sandeep Kumar Jena', age: '29' },
          { name: 'Kanchan Thakur', age: '30' }
      ]
    })
  } 

  nameChangedHandler = (event) => {
    this.setState({
      Persons: [
          { name: 'Sharad Kumar Singh', age: '33' },
          { name: event.target.value, age: '29' },
          { name: 'Kanchan Thakur', age: '30' }
      ]
    })
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Welcome to first React tutorial application!</h1>
        <p>This is a first paragraph that we used in this application!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this,'shikha singh')}>Switch button</button>
        <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} />
        <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age}
         changed={this.nameChangedHandler}>My hobbies: Cooking</Person>
        <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age} />
      </div>
   );
  }
  
  /*return React.createElement('div', {className: 'App'}, 
        React.createElement('h1',null, 'Welcome to first react tutorial application!'));*/
}

export default App;
