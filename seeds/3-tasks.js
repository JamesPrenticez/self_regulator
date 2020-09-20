exports.seed = (knex, Promise) => {
  return knex('tasks').insert([
    {id: 1, user_id: 1, task: 'Task1', boxes: JSON.stringify(['pass', 'fail', 'neutral', 'fail', 'pass'])},
    {id: 2, user_id: 1, task: 'Task2', boxes: JSON.stringify(['pass', 'fail', 'neutral', 'fail', 'pass'])},
    {id: 3, user_id: 1, task: 'Task3', boxes: JSON.stringify(['pass', 'fail', 'neutral', 'fail', 'pass'])},
    {id: 5, user_id: 1, task: 'Task5', boxes: JSON.stringify(['pass', 'fail', 'neutral', 'fail', 'pass'])},
    {id: 6, user_id: 1, task: 'Task6', boxes: JSON.stringify(['pass', 'fail', 'neutral', 'fail', 'pass'])}
  ])
}
