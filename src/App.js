import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';

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

  switchNameHandler = (newName) => {
    this.setState({
      Persons: [
          { name: newName, age: '33' },
          { name: 'Sandeep Kumar Jena', age: '29' },
          { name: 'Kanchan Thakur', age: '30' }
      ]
    })
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

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.Persons.map((person, index) => {
                return <Person key={index}
                            click={() => this.deletePersonHandler(index)} 
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            name={person.name} 
                            age={person.age} />
              })}
          </div> 
      )
      style.backgroundColor = "Red";
      style[':hover'] = {
        backgroundColor: '#ffcccb',
        color: 'black'
      }
      
    }

    const classes = [];

    if(this.state.Persons.length <= 2){
      classes.push('red');
    }

    if(this.state.Persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Welcome to first React tutorial application!</h1>
          <p className={classes.join(' ')}>This application is working fine!</p>
          <button style={style} onClick={this.toggleNameHandler}>Show Content</button>
          {persons}        
        </div>
      </StyleRoot>      
   );
  }
  
  /*return React.createElement('div', {className: 'App'}, 
        React.createElement('h1',null, 'Welcome to first react tutorial application!'));*/
}

export default Radium(App);
