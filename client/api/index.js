import request from 'superagent'

export function fetchUsers() {
    return request  
        .get('/api')
        .then(res => res.body.users)
}

export function fetchTasks() {
    return request  
        .get('/api')
        .then(res => res.body.tasks)//tasks?
}