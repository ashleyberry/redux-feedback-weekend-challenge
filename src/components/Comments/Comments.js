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
import Icon from '@mdi/react';
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js';

class Comments extends Component {

// sends user back to previous supported page
goBack = () => {
    this.props.history.push( '/supported' ); 
} // end goBack

// dispatches our comments to our reducer
onChangeComments = ( event ) => {
    console.log( 'in onChangeComments:', event.target.value );
    this.props.dispatch({
        type: 'SET_COMMENTS', 
        payload: event.target.value 
    })
}

// sends user to the next page of the feedback form
onNext = () => {
  console.log( 'this.props.history', this.props.history );
  this.props.history.push( '/review' );
} // end onNext

    render() {
        return (
            <div>
                <header className="App-header">
                    <Typography 
                        variant="h4">
                        Any comments you want to leave?
                    </Typography>
                </header>
                <div className="input">
                    <TextField 
                        onChange={ ( event ) => this.onChangeComments ( event ) } 
                        type='text' 
                        label='Comments'
                        multiline
                        style = { { width: 400 } }
                        rowsMax={12}
                        variant='outlined'>
                    </TextField>
                </div>
                <Button 
                    variant='outlined'
                    onClick={ this.goBack }>
                    <Icon path={ mdiArrowLeft } size={ 1 } />
                    Back
                </Button>
                <Button 
                    variant='outlined'
                    onClick={ this.onNext }>
                    Next <Icon path={ mdiArrowRight } size={ 1 }/>
                </Button>
            </div>
        ); // end return
    } // end render
} // end class

export default connect() (withRouter ( Comments ));