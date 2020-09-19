import {RECEIVE_USERS} from '../actions'
const initialState = []

export default function usersReducer(state=initialState, action){
    switch(action.type) {
        case RECEIVE_USERS:
            return action.users
        default:
            return state
    }
}