import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Success extends Component {
    render() {
        return (
            <div><p>Success! You done did it.</p></div>
        );
    }
}

export default (withRouter ( Success ));