import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {



    onChangeFeeling = ( event ) => {
        console.log( 'in onChangeFeeling:', event.target.value );
        this.props.dispatch({
            type: 'SET_FEELING', // setting our action type
            payload: event.target.value // and payload to send to reducer
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
                <h1>How are you feeling today?</h1>
                <label htmlFor='feeling'>Feeling?</label>
                <input type='number' 
                    onChange={ this.onChangeFeeling } >
                </input>
                <button onClick={ this.onNext }>Next</button>
            </div>
        );
    }
}
// "Decorate" our component with `props.router`
// withRouter allows us to programmatically change what page we're on
// withRouter gives us the history prop to do above stuffs
// need connect in order to dispatch an item
export default connect() (withRouter ( Feeling ));