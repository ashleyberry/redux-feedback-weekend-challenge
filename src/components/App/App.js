import React, { Component } from 'react';
import { connect} from 'react-redux';
// import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom'
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Sucess/Success';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4> 
          </header>
          {/* Navigation! Delete MEEEEEEEEEEEE*/}
            {/* <nav>
            <main>
              <ul>
                <li><Link to="/">Feeling</Link></li>
                <li><Link to="/understanding">Understanding</Link></li>
                <li><Link to="/supported">Supported</Link></li>
                <li><Link to="/comments">Comments</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/success">Success</Link></li>
              </ul>
            </main>
          </nav> */}
          {/* SERIOUSLY DELETE MEEEEEEE */}
          <br/>
          <Route path='/' exact>
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
        </div>
      </Router>
    );
  }
}

export default connect()(App);
