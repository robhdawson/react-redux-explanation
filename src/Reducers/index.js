import { combineReducers } from 'redux';

function log(name, state, action) {
    console.log(`reducer '${name}' processing action '${JSON.stringify(action)}'`);
    console.log(`current state: ${state}`);
}

const todd = (state = 'fine', action) => {
    log('todd', state, action);
    switch(action.type) {
        case 'TODD':
            console.log(`modifying state to: ${action.mood}`);
            console.log('');
            return action.mood;
        default:
            console.log('keeping current state');
            console.log('');
            return state;
    }
}

const angela = (state = 'okay', action) => {
    log('angela', state, action);
    switch(action.type) {
        case 'ANGELA':
            console.log(`modifying state to: ${action.mood}`);
            console.log('');
            return action.mood;
        default:
            console.log('keeping current state');
            console.log('');
            return state;
    }
}

const maryanne = (state = 'medium', action) => {
    log('maryanne', state, action);
    switch(action.type) {
        case 'MARYANNE':
            console.log(`modifying state to: ${action.mood}`);
            console.log('');
            return action.mood;
        default:
            console.log('keeping current state');
            console.log('');
            console.log('');
            console.log('----');
            console.log('');
            console.log('');
            return state;
    }
}

export default combineReducers({
    todd,
    angela,
    maryanne,
});
