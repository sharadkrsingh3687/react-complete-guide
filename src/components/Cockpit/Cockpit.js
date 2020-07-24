import React, {useEffect} from 'react';

import './Cockpit.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffort.');

        setTimeout(() => {
            alert('Saved data to cloud.')
        }, 1000);

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect.')
        };
    }, []); // execute when component run only one time. if we use [] then

    useEffect(() => {

        console.log('[Cockpit.js] 2nd useEffort.')
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffort.');
        };
    });

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

    const classes = [];

    if(props.personsLength <= 2){
      classes.push('red');
    }

    if(props.personsLength <= 1){
      classes.push('bold');
    }

    if(props.showPersons> 0)
    {        
      style.backgroundColor = "Red";
      style[':hover'] = {
        backgroundColor: '#ffcccb',
        color: 'black'
      }
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This application is working fine!</p>
            <button style={style} onClick={props.clicked}>Show Content</button>
        </div>
    );
}

export default React.memo(Cockpit);