import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Review extends Component {
    render() {
        return (
            <div><p>This page up for review</p></div>
        );
    }
}

export default connect() (withRouter ( Review ));