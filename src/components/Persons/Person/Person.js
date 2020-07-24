import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './Person.css';

class Person extends Component {

    render() {
        console.log("[Person.js] rendering...!");

        const style = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        }

        return (
            <StyleRoot>
                <div className="Person" style={style}>
                    <p onClick={this.props.click}>Hi, i am {this.props.name} and my age is {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input onChange={this.props.changed} value={this.props.name} />
                </div> 
            </StyleRoot>           
        )
    }
};

export default Radium(Person);