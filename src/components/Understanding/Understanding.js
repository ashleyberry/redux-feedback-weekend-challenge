import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// styling
import 'fontsource-roboto'
import { 
    Button, 
    Typography,
    TextField
} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js'

class Understanding extends Component {

    // sends user back to previous feelings page
    goBack = () => {
        this.props.history.push( '/feeling' ); 
    } // end goBack


    onChangeUnderstanding = ( event ) => {
        console.log( 'in onChangeUnderstanding:', event.target.value );
        // set a new understanding state
        this.setState({ 
            currentUnderstanding: {
                ...this.state,
                // updating understanding property to be event value
                currentUnderstanding: event.target.value 
            }
        })
        this.props.dispatch({
            type: 'SET_UNDERSTANDING', 
            payload: event.target.value 
          })
        }

    // sends user to next 'supported' page
    onNext = () => {
      this.props.history.push( '/supported' ); 
    } // end onNext

    render() {
        return (
            <div>
                <header className="App-header">
                <Typography 
                    variant="h4">
                    How well are you understanding the content?
                </Typography>
                </header>
                <div className="input">
                    <TextField 
                        onChange={ ( event ) => this.onChangeUnderstanding ( event ) } 
                        required
                        type='number' 
                        label='Understanding'>
                    </TextField>
                </div>
                <Button 
                    variant="outlined"
                    onClick={ this.goBack }>
                    <Icon path={ mdiArrowLeft } size={ 1 } />
                    Back
                </Button>
                <Button variant="outlined" 
                    disabled={(this.props.understanding.length === 0 ) ? true : false } 
                    onClick={ this.onNext }>
                    Next <Icon path={ mdiArrowRight } size={ 1 }/>
                </Button>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = ( reduxStore ) => {
    console.log( 'reduxStore:', reduxStore.understandingReducer );
    return {
        understanding: reduxStore.understandingReducer,
    }
}

export default connect( putStateOnProps ) (withRouter ( Understanding ));