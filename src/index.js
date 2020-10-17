import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducers

// take comments object from dispatch and updates the state
const commentReducer = ( state=[], action ) => { 
  if ( action.type === 'SET_COMMENTS' ) { 
    // returning our new redux state "aka store"
    // action.payload === response.data which came from server 
    let newComments = action.payload 
    // becomes new state. different than adding item into state
    return newComments 
  }  
  return state;
}

// take feeling object from dispatch and updates the state
const feelingReducer = ( state=[], action ) => { 
  if ( action.type === 'SET_FEELING' ) { 
      let newFeeling = action.payload
      return newFeeling
    }  
      return state;
}

// take support object from dispatch and updates the state
const supportReducer = ( state=[], action ) => { 
  if ( action.type === 'SET_SUPPORT' ) { 
      let newSupport = action.payload
      return newSupport
  }  
    return state;
}

// take understanding object from dispatch and updates the state
const understandingReducer = ( state=[], action ) => { 
  if ( action.type === 'SET_UNDERSTANDING' ) { 
      let newUnderstanding = action.payload
      return newUnderstanding
  }  
    return state;
}

// store
const reduxStore = createStore(
    combineReducers({
        commentReducer,
        feelingReducer,
        supportReducer,
        understandingReducer
    }),
    applyMiddleware( logger )
  );

// providing store to app
ReactDOM.render(<Provider store={ reduxStore }><App /></Provider>, 
  document.getElementById('root'));
registerServiceWorker();


