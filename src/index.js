import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = ( state=[], action ) => { // take feeling object from dispatch and updates the state
    if ( action.type === 'SET_FEELING' ) { 
        // returning our new redux state "aka store"
        return action.payload // action.payload === response.data which came from server 
    }  
      return state;
}

const reduxStore = createStore(
    combineReducers({
        feeling: feelingReducer
    }),
    applyMiddleware( logger )
  );

ReactDOM.render(<Provider store={ reduxStore }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
