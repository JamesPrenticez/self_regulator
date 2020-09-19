import request from 'superagent'

export function fetchUsers() {
    return request  
        .get('/api/users')
        .then(res => res.body.users)
}

export function fetchTasks() {
    return request  
        .get('/api/tasks')
        .then(res => res.body.tasks)
}