import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// styling
import 'fontsource-roboto'
import { 
    Button, 
    Typography 
} from '@material-ui/core';

class Welcome extends Component {

    // send user to first page of feedback form
    onNext = () => {
        this.props.history.push( '/feeling' );
      } // end onNext

    render() {
        return (
            <div>
                <header className='App-header'>
                    <Typography 
                        variant='h4'>
                        Please take a few moments to fill out this short feedback form
                    </Typography>
                </header>
                <div className='welcome'>
                    <Button variant='outlined' 
                        onClick={ this.onNext }>
                        Begin
                    </Button>
                </div>
            </div>
        )
    }
}

// We need withRouther() in order to use props.history.push()
export default connect() ( withRouter ( Welcome ));