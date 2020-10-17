import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Supported extends Component {

    onChangeSupport = ( event ) => {
        console.log( 'in onChangeSupport:', event.target.value );
        this.props.dispatch({
            type: 'SET_SUPPORT', 
            payload: event.target.value 
          })
        }

    onNext = () => {
      console.log( 'this.props.history', this.props.history );
      this.props.history.push( '/comments' );
    } // end onNext

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4> 
                </header>
                <h1>How well are you being supported?</h1>
                <label htmlFor='support'>Support?</label>
                <input required type='number' 
                    onChange={ this.onChangeSupport } >
                </input>
                <button onClick={ this.onNext }>Next</button>
            </div>
        ); // end return
    } // end render
} // end class

export default connect() (withRouter ( Supported ));