import React from 'react';
import './Person.css';

const person = (props) => {
    return (
            <div className="Person">
                <p onClick={props.click}>Hi, i am {props.name} and my age is {props.age}</p>
                <p>{props.children}</p>
                <input onChange={props.changed} defaultValue={props.name} />
            </div>           
    )
};

export default person;