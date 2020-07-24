import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps.');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){

        console.log('[Persons.js] shouldComponentUpdate.');
        if(
            nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked
        ){
            return true;
        }else {
            return false; // here we check the condition of current state and next state.
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate.');
        return { snapshot: "Snapshot-Data"};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate.');
        console.log(snapshot);
    }
    render() {

        console.log("[Persons.js] rendering...");

        return this.props.persons.map((person, index) => {
        return <Person key={index}
            click={() => this.props.clicked(index)} 
            changed={(event) => this.props.changed(event, person.id)}
            name={person.name} 
            age={person.age} />
        });
    }
}

export default Persons;