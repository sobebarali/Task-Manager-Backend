const express = require("express")
const {getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    findTask,
    findTaskByName} = require('../handlers/task.handle')

const taskRouter = express.Router()

taskRouter.route('/').get(getAllTask).post(createTask)
taskRouter.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
taskRouter.route('/:name').get(findTaskByName)
taskRouter.route('/:query').get(findTask)

module.exports = taskRouter