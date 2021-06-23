export const projects = [
    {
        id: 1, name: 'House', tasks: [
            { id: 1, name: 'Cleaning', description: 'Vacuuming', completed: true },
            { id: 2, name: 'Buy a pillow', description: 'Need to find pink and grey pillow', completed: false }
        ]
    },
    {
        id: 2, name: 'Homework', tasks: [
            { id: 3, name: 'Math homework', description: 'Test number 3', completed: true },
            { id: 4, name: 'Science homework', description: 'Research about space', completed: false },
            { id: 5, name: 'English homework', description: 'Essay about rabbits', completed: false }
        ]
    },
    {
        id: 3, name: 'Different staff', tasks: [
            { id: 6, name: 'Meeting with friends', description: '7 pm', completed: true },
            { id: 7, name: 'Packing for the trip', description: 'Need to remember about equipment', completed: false }
        ]
    }

]

export const NormalizeProjects = () => {
    const normalizeBy = key => {
        return (data, item) => {
            data[item[key]] = item
            return data
        }
    }
    const normalizedTasks = projects
        .map(project => project.tasks)
        .flat()
        .reduce(normalizeBy("id"), {})

    const normalizedProjects = projects
        .map(project => ({
            ...project,
            tasks: project.tasks.map(task => task.id),
        }))
        .reduce(normalizeBy("id"), {})

    const normalizedState = {
        projectsById: normalizedProjects,
        tasksById: normalizedTasks
    }

    return normalizedState
}