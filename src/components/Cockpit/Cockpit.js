import React from 'react';
import './Cockpit.css'

const cockpit = (props) => {
    
    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
      
      if(props.showPersons){          
        style.backgroundColor = "Red";
        style[':hover'] = {
            backgroundColor: '#ffcccb',
            color: 'black'
        }
      }
    const classes = [];

    if(props.persons.length <= 2){
      classes.push('red');
    }

    if(props.persons.length <= 1){
      classes.push('bold');
    }
    
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This application is working fine!</p>
            <button style={style} onClick={props.clicked}>Show Content</button>
        </div>        
    )
}

export default cockpit;