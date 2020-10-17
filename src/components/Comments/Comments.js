import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {

onChangeComments = ( event ) => {
    console.log( 'in onChangeComments:', event.target.value );
    this.props.dispatch({
        type: 'SET_COMMENTS', 
        payload: event.target.value 
    })
}

onNext = () => {
  console.log( 'this.props.history', this.props.history );
  this.props.history.push( '/review' );
} // end onNext

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4> 
                </header>
                <h1>Any comments you want to leave?</h1>
                <label htmlFor='comments'>Comments</label>
                <input type='text' 
                    onChange={ this.onChangeComments } >
                </input>
                <button onClick={ this.onNext }>Next</button>
            </div>
        ); // end return
    } // end render
} // end class

export default connect() (withRouter ( Comments ));