export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'
export const RECEIVE_BOXES = 'RECEIVE_BOXES'
export const CHANGE_BOX = 'CHANGE_BOX'

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

export const receiveBoxes = (boxes) => {
  return {
    type: RECEIVE_BOXES,
    boxes
  }
}

export const changeBox = (box) => {
  return {
    type: CHANGE_BOX,
    box
  }
}