import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {

    onChangeUnderstanding = ( event ) => {
        console.log( 'in onChangeUnderstanding:', event.target.value );
        this.props.dispatch({
            type: 'SET_UNDERSTANDING', 
            payload: event.target.value 
          })
        }

    onNext = () => {
      console.log( 'this.props.history', this.props.history );
      this.props.history.push( '/supported' );
    } // end onNext
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4> 
                </header>
                <h1>How well are you understanding the content?</h1>
                <label htmlFor='understanding'>Understanding?</label>
                <input required type='number' 
                    onChange={ this.onChangeUnderstanding } >
                </input>
                <button onClick={ this.onNext }>Next</button>
            </div>
        ); // end return
    } // end render
} // end class

export default connect() (withRouter ( Understanding ));