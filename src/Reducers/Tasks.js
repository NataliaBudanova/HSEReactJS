import { CHANGE_STATUS, TASK_ADD } from '../Actions/Tasks/Tasks'
import { projects } from '../Components/NormilizeProjects/NormilizeProjects'
import { NormalizeProjects } from '../Components/NormilizeProjects/NormilizeProjects'

const { projectsById, tasksById } = NormalizeProjects(projects)

const initialState = {
    projects: projectsById,
    tasks: tasksById
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_ADD: {
            const taskId = Object.keys(state.tasks).length + 1
            const newTasks = { ...state.tasks }
            const newTask = {
                id: taskId,
                name: action.name,
                description: action.description,
                completed: false
            }
            newTasks[taskId] = newTask
            return {
                ...state,
                tasks: newTasks
            }
        }
        case CHANGE_STATUS: {
            const taskId = action.id
            const newTasks = { ...state.tasks }
            newTasks[taskId].completed = !action.completed
            return {
                ...state,
                tasks: newTasks
            }
        }
        default:
            return state;
    }
}