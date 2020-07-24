import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] constructor called!")
    
    // you can also define state out side of the constructor and we do when we use ES 6 code.
    this.state = {
      persons: [
        { id: 101, name: 'Sharad', age: '33' },
        { id: 102, name: 'Sandeep', age: '29' },
        { id: 103, name: 'Kanchan', age: '30' }
      ],
      otherState: 'some other data!',
      showPersons: false,
      showCockpit: true
    }
  }

  static getDerivedStateFromProps(props, state){

    console.log("[App.js] getDrivedStateFromProps called!", props);
    return state;
  }

  componentDidMount(){
    console.log("[App.js] componentDidMound called!");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;// if we return false then update does not happen!.
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('[App.js] componentWillUnmount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render(){    

    console.log("[App.js] render method called!");
    let persons = null;

    if(this.state.showPersons){
      // if we used Persons as a Class Component then we will use lifecycle hook 
      // into it but its a function component.
      persons = <Persons persons={this.state.persons} 
                     clicked={this.deletePersonHandler}
                     changed={this.nameChangedHandler} />      
    }
    return (
      <StyleRoot>
        <div className="App">
          <button onClick={() => {
            this.setState({ showCockpit: false });
          }}
          >Remove Cockpit</button>
          {this.state.showCockpit ? <Cockpit personLength={this.state.persons.length} 
                   title={this.props.appTitle}
                   showPersons={this.state.showPersons}
                   clicked={this.toggleNameHandler} /> : null}
          {persons}        
        </div>
      </StyleRoot>      
   );
  }
  
  /*return React.createElement('div', {className: 'App'}, 
        React.createElement('h1',null, 'Welcome to first react tutorial application!'));*/
}

export default Radium(App);
