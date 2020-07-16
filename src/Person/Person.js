import React from 'react';
import Radium, {StyleRoot} from 'radium';
import './Person.css';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <StyleRoot>
            <div className="Person" style={style}>
                <p onClick={props.click}>Hi, i am {props.name} and my age is {props.age}</p>
                <p>{props.children}</p>
                <input onChange={props.changed} defaultValue={props.name} />
            </div> 
        </StyleRoot>           
    )
};

export default Radium(person);