import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Review extends Component {

    onNext = () => {
        console.log( 'this.props.history', this.props.history );
        // sending user to success page after button click
        this.props.history.push( '/success' ); 
      } // end onNext

    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                {/* grabbing info from redux state props to display on DOM */}
                <h2>Feelings: { this.props.feelings }</h2> 
                <h2>Understanding: { this.props.understanding }</h2>
                <h2>Support: { this.props.support }</h2>
                <h2>Comments: { this.props.comments }</h2>
                <button onClick={ this.onNext }>Submit</button>
            </div>
        ); // end return
    } // end render
} // end component

const mapStateToProps = ( reduxStore ) => { 
    console.log( 'reduxStore:', reduxStore );
    return {
        feelings: reduxStore.feelingReducer,
        understanding: reduxStore.understandingReducer,
        support: reduxStore.supportReducer,
        comments: reduxStore.commentReducer
    }
} // end mapStateToProps function

export default connect( mapStateToProps ) ( withRouter ( Review ));