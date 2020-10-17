import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
// styling
import 'fontsource-roboto'
import { 
    Button, 
    Typography 
} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'

class Review extends Component {

    // sends user back to previous comments page
    goBack = () => {
        this.props.history.push( '/comments' ); 
    } // end goBack

    // sends user to success page after button click
    onNext = () => {
        this.props.history.push( '/success' ); 
      } // end onNext

    // posting new feedback info up to the server
    handleSubmit = () => {
        console.log( 'in handleSubmit:', this.props )
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: this.props.feelings,
                understanding: this.props.understanding,
                support: this.props.support,
                comments: this.props.comments
            } 
        }).then( response => {
            console.log( 'POST succeeded', response )
        }).catch( err => {
            console.error( 'POST failed', err )
            alert( 'Could not add feedback at this time. Please try again later' );
        });
        this.onNext();
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <Typography 
                        variant="h4">
                        Review Your Feedback
                    </Typography>
                </header>
                <div className="displayFeedback">
                    {/* grabbing info from redux state props to display on DOM */}
                    <Typography variant="h5">Feelings: { this.props.feelings }</Typography>
                    <Typography variant="h5">Understanding: { this.props.understanding }</Typography>
                    <Typography variant="h5">Support: { this.props.support }</Typography>
                    <Typography variant="h5">Comments: { this.props.comments }</Typography>
                </div>
                <Button 
                    variant="outlined"
                    onClick={ this.goBack }>
                    <Icon path={ mdiArrowLeft } size={ 1 } />
                    Back
                </Button>
                <Button 
                    variant="contained"
                    color="primary" 
                    onClick={ this.handleSubmit }>
                    Submit
                </Button>
            </div>
        ); // end return
    } // end render
} // end component

const putStateOnProps = ( reduxStore ) => { 
    console.log( 'reduxStore:', reduxStore );
    return {
        feelings: reduxStore.feelingReducer,
        understanding: reduxStore.understandingReducer,
        support: reduxStore.supportReducer,
        comments: reduxStore.commentReducer
    }
} // end mapStateToProps function

export default connect( putStateOnProps ) ( withRouter ( Review ));