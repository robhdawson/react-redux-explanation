import React, { Component } from 'react';

import Display from './Components/display';
import ActionButton from './Components/action-button';

import { todd, angela } from './Actions';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1 className="title">react + redux</h1>

                <h3>current state</h3>
                <Display />

                <h3>actions</h3>
                <ActionButton action={todd('happy')} />
                <ActionButton action={todd('depressed')} />
                <ActionButton action={angela('rowdy')} />
                <ActionButton action={angela('chill')} />

                <p className="hint">open the console to see some stuff</p>
            </div>
        );
    }
}

export default App;
