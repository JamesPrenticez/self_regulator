import {CHANGE_BOX} from '../actions'

const initialState = []

export default function currentBoxReducer (state = initialState, action){
    switch (action.type) {
        case CHANGE_BOX:
            return action.box
        default:
            return state
    }
}