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
import { mdiArrowRight } from '@mdi/js'

class Feeling extends Component {


    onChangeFeeling = ( event ) => {
        console.log( 'in onChangeFeeling:', event.target.value );
        // set a new state
        this.setState({ 
            currentFeeling: {
                ...this.state,
                // updating feeling property to be event value
                currentFeeling: event.target.value 
            }
        })
        this.props.dispatch({
            // setting our action type
            type: 'SET_FEELING', 
            // and payload to send to reducer
            payload: event.target.value 
          })
        }

    onNext = () => {
      // We need withRouther() in order to use props.history.push()
      console.log( 'this.props.history', this.props.history );
      this.props.history.push( '/understanding' );
    } // end onNext

    render() {
        return (
            <div>
                <header className="App-header">
                    <Typography 
                        variant="h4">
                        How are you feeling today?
                    </Typography>
                </header>
                <div className="input">
                    <TextField 
                        onChange={ ( event ) => this.onChangeFeeling ( event ) } 
                        required
                        type='number' 
                        label='Feeling'>
                    </TextField>
                </div>
                <Button variant="outlined" 
                    disabled={ ( this.props.feelings.length === 0 ) ? true : false } 
                    onClick={ this.onNext }>
                    Next <Icon path={ mdiArrowRight } size={ 1 }/>
                </Button>
            </div>
        );
    }
}

// connects what's in our state to our components
const putReduxStateOnProps = ( reduxStore ) => {
    // console.log( 'reduxStore:', reduxStore.feelingReducer );
    return {
        feelings: reduxStore.feelingReducer,
    }
}

// "Decorate" our component with `props.router`
// withRouter allows us to programmatically change what page we're on
// withRouter gives us the history prop to do above stuffs
// need connect in order to dispatch an item
export default connect( putReduxStateOnProps ) (withRouter ( Feeling ));
