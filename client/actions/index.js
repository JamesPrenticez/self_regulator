import request from 'superagent'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  }
}