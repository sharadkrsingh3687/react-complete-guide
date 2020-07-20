import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        errorMessage: '',
        hasError: false
    }

    componentDidCatch = (errMsg, info) => {
        this.setState({ errorMessage: errMsg, hasError: true });
    }

    render() {
        if(this.state.hasError){
            return (
                <div>
                    <h1>Application is broken, Please see the below message!</h1>
                    <p>Error Message is : {this.state.errorMessage}</p>
                </div>                
            )
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;