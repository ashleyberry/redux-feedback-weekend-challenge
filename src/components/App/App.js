import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom'
import './App.css';
import axios from 'axios'

// import components
import Admin from '../Admin/Admin';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Success from '../Sucess/Success';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import Welcome from '../Welcome/Welcome';

// MATERIAL-UI
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {

  state = {
    feedback: []
  };

  componentDidMount(){
      this.getFeedback();
  }

  // make axios call to get feedback from db
  getFeedback = () => {
      axios({
          method: 'GET',
          url: '/feedback'
      }).then( ( response )=>{
          this.setState({
              feedback: response.data
          })
      }).catch( ( err )=>{
          console.log( err );
          alert( 'ruh roh' );
      })
  } // end getFeedback

  // delete feedback item from database
  onDelete = ( item ) => {
    console.log( 'in onDelete', item );
          axios({
              method: 'DELETE',
              url: `/feedback/${ item }`
          }).then( function( response ){
            console.log( 'Deleted!', response );
            // the below function to refresh page upon delete doesn't work! 'cannot read property of undefined'
            // this.getFeedback()
          }).catch( function( err ){
              console.log( 'error in delete', err )
              alert('oh noes!');
          }) // end AJAX
  } // end deleteBook

  render() {
    return (
      <Router>
        <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Route path='/' exact>
            <Welcome />
          </Route>
          <Route path='/feeling'>
            <Feeling />
          </Route>
          <Route path='/understanding'>
            <Understanding />
          </Route>
          <Route path='/supported'>
            <Supported />
          </Route>
          <Route path='/comments'>
            <Comments />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/success'>
            <Success />
          </Route>
          <Route path='/admin'>
            <Admin 
              feedback={ this.state.feedback }
              onDelete={ this.onDelete }
            />
          </Route>
        </div>
        </React.Fragment>
      </Router>
    );
  }
}

// 'export' keyword exposes content to other modules
export default connect()( App );

