import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Supported extends Component {
    render() {
        return (
            <div><p>Like a great bra</p></div>
        );
    }
}

export default connect() (withRouter ( Supported ));