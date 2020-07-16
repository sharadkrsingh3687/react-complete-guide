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
    otherState: 'some other data!',
    showPersons: false
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
          { name: 'Shikha Singh', age: '30' }
      ]
    })
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.Persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.Persons.map((person, index) => {
                return <Person key={index}
                            click={() => this.deletePersonHandler(index)} 
                            changed={this.nameChangedHandler.bind(this)}
                            name={person.name} 
                            age={person.age} />
              })}
          </div> 
      )
    }

    return (
      <div className="App">
        <h1>Welcome to first React tutorial application!</h1>
        <p>This is a first paragraph that we used in this application!</p>
        <button style={style} onClick={this.toggleNameHandler}>Switch button</button>
        {persons}        
      </div>
   );
  }
  
  /*return React.createElement('div', {className: 'App'}, 
        React.createElement('h1',null, 'Welcome to first react tutorial application!'));*/
}

export default App;
