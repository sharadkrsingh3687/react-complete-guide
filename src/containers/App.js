import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import './App.css';

class App extends Component {

  state = {
    Persons: [
      { id: 101, name: 'Sharad', age: '33' },
      { id: 102, name: 'Sandeep', age: '29' },
      { id: 103, name: 'Kanchan', age: '30' }
    ],
    otherState: 'some other data!',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex( p => {
      return p.id === id;
    })

    const person = {
      ...this.state.Persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.Persons];

    persons[personIndex] = person;
    
    this.setState({ Persons: persons})
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    /* Note:- JavaScript Array and React State are reference type. So, whne we use splice then it 
              already delete data from original React State and it's not a good prectice to use it.
    
    const persons = this.state.Persons;     
    */
    
    /* for overcome from above issue we will use slice of the React State 
      const persons = this.state.Persons.slice();
    
      or we can use below statement */
    const persons = [...this.state.Persons];
    persons.splice(personIndex, 1);
    this.setState({Persons: persons});
  }

  render(){

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
            <Persons persons={this.state.Persons}
                     clicked={this.deletePersonHandler}
                     changed={this.nameChangedHandler} />            
          </div>          
      )      
    }

    return (
      <div className="App">
        <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.Persons}
            title={this.props.appTitle} 
            clicked={this.toggleNameHandler} />
        {persons}        
      </div>
   );
  }
  
  /*return React.createElement('div', {className: 'App'}, 
        React.createElement('h1',null, 'Welcome to first react tutorial application!'));*/
}

export default App;
