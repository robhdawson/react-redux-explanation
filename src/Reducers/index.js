import { combineReducers } from 'redux';

const todd = (state = 'fine', action) => {
    switch(action.type) {
        case 'TODD':
            return action.mood;
        default:
            return state;
    }
}

const angela = (state = 'okay', action) => {
    switch(action.type) {
        case 'ANGELA':
            return action.mood;
        default:
            return state;
    }
}

const ricardo = (state = 'content', action) => {
    switch(action.type) {
        case 'RICARDO':
            return action.mood;
        default:
            return state;
    }
}

const spurgeon = (state = 'hunky dory', action) => {
    switch(action.type) {
        case 'SPURGEON':
            return action.mood;
        default:
            return state;
    }
}

const maryanne = (state = 'medium', action) => {
    switch(action.type) {
        case 'MARYANNE':
            return action.mood;
        default:
            return state;
    }
}

export default combineReducers({
    todd,
    ricardo,
    spurgeon,
    angela,
    maryanne,
});
