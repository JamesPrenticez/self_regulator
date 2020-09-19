exports.seed = (knex, Promise) => {
  return knex('tasks').insert([
    {id: 1, user_id: 1, task: 'Task1', boxs: '[pass, fail, neutral, fail, pass]'},
    {id: 2, user_id: 1, task: 'Task2', boxs: '[pass, fail, neutral, fail, pass]'},
    {id: 3, user_id: 1, task: 'Task3', boxs: '[pass, fail, neutral, fail, pass]'},
    {id: 5, user_id: 1, task: 'Task5', boxs: '[pass, fail, neutral, fail, pass]'},
    {id: 6, user_id: 1, task: 'Task6', boxs: '[pass, fail, neutral, fail, pass]'},
  ])
}
