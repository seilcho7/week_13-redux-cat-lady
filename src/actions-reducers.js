import { combineReducers } from 'redux';

// STATE
const initialState = {
    cats: {
        1001: {
            name: 'Milla',
            activity: 'drooling'
        },
        1002: {
            name: 'Oakley',
            activity: 'playing'
        }
    }
};

// ACTION + ACTION CREATORS
const ACTION_SET_NAME = "name";
const ACTION_SET_ACTIVITY = "activity";
const ACTION_ADD_CAT = "add";

export function setName(id, name) {
    return {
        type: ACTION_SET_NAME,
        payload: {
            id,
            name
        }
    }
}

export function setActivity(id, activity) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            id,
            activity
        }
    }
}

export function addCat(name, activity) {
    return {
        type: ACTION_ADD_CAT,
        payload: {
            name,
            activity
        }
    }
}

window.setName = setName;
window.setActivity = setActivity;
window.addCat = addCat;

// REDUCER
function cats(state=initialState.cats, action={type: ''}) {
    switch(action.type) {
        case ACTION_SET_NAME:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    name: action.payload.name
                }
            }
        break;
        case ACTION_SET_ACTIVITY:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    activity: action.payload.activity
                }
            }
        break;
        case ACTION_ADD_CAT:
            const randomId = Math.floor(Math.random()*Math.floor(1000));
            return {
                ...state,
                [randomId]: {
                    ...state[randomId],
                    name: action.payload.name,
                    activity: action.payload.activity
                }
            }
        break;
        default:
            return state
    }

}

export const rootReducer = combineReducers({
    cats
});