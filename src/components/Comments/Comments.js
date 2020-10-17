import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <div><p>Commentsssss</p></div>
        );
    }
}

export default connect() (withRouter ( Comments ));