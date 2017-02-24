import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return (
            <div className="display">
                <div className="display-json">{JSON.stringify(this.props.fullState, null, 4)}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    fullState: state,
});

export default connect(mapStateToProps)(Display);
