import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// styling
import 'fontsource-roboto'
import { 
    Button, 
    Typography 
} from '@material-ui/core';

class Success extends Component {

    // clearing all input fields by dispatching empty payloads upon click.
    onStartOver = () => { 
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: ''
          });
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: ''
        });
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: ''
        });
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: ''
        });
        // sends user to welcome page
        this.props.history.push( '/' ); 
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <Typography 
                        variant="h4">
                        Thank you for your feedback!
                    </Typography>
                </header>
                <br/>
                <Button 
                    variant="contained"
                    color="primary" 
                    onClick={ this.onStartOver }>
                    Leave New Feedback
                </Button>
            </div>
        );
    }
}

export default connect() ( withRouter ( Success ));