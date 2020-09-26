import {combineReducers} from 'redux'

import usersReducer from './users'
import tasksReducer from './tasks'
import boxesReducer from './boxes'
import currentBoxReducer from './currentBox'

export default combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    boxes: boxesReducer,
    box: currentBoxReducer
})

