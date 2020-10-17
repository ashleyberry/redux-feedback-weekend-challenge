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

class Supported extends Component {

    // sends user back to previous understanding page
    goBack = () => {
        this.props.history.push( '/understanding' ); 
    } // end goBack

    onChangeSupport = ( event ) => {
        console.log( 'in onChangeSupport:', event.target.value );
        // set a new state
        this.setState({ 
            currentSupport: {
                ...this.state,
                // updating supported property to be event value
                currentSupport: event.target.value 
            }
        })
        // sending props to the support reducer
        this.props.dispatch({
            type: 'SET_SUPPORT', 
            payload: event.target.value 
          })
        }

    // sends user to next page
    onNext = () => {
      console.log( 'this.props.history', this.props.history );
      this.props.history.push( '/comments' );
    } // end onNext

    render() {
        return (
            <div>
                <header className="App-header">
                    <Typography 
                        variant="h4">
                        How well are you being supported?
                    </Typography>
                </header>
                <div className="input">
                    <TextField 
                        onChange={ ( event ) => this.onChangeSupport ( event ) } 
                        required
                        type='number' 
                        label='Support'>
                    </TextField>
                </div>
                <Button 
                    variant="outlined"
                    onClick={ this.goBack }>
                    <Icon path={ mdiArrowLeft } size={ 1 } />
                    Back
                </Button>
                <Button 
                    variant="outlined" 
                    disabled={(this.props.supported.length === 0 ) ? true : false } 
                    onClick={ this.onNext }>
                    Next <Icon path={ mdiArrowRight } size={ 1 }/>
                </Button>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = ( reduxStore ) => {
    console.log( 'reduxStore:', reduxStore.supportReducer );
    return {
        supported: reduxStore.supportReducer,
    }
}

export default connect( putStateOnProps ) (withRouter ( Supported ));