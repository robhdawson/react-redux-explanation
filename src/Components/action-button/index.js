import React, { Component } from 'react';
import { connect } from 'react-redux'

class ActionButton extends Component {
    handleClick() {
        console.log('FIRING ACTION');
        console.log(JSON.stringify(this.props.action));
        console.log('');
        this.props.dispatch(this.props.action);
    }

    render() {
        return (
            <div className="button" onClick={this.handleClick.bind(this)}>
                <div>emit action</div>
                <div className="action-json">{JSON.stringify(this.props.action, null, 1)}</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(null, mapDispatchToProps)(ActionButton);
