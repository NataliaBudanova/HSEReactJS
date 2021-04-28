import Task from '../Task/Task'
import TaskAdd from '../TaskAdd/TaskAdd'
import React from 'react';

class TaskList extends React.Component {
    state = {
        tasks:  [
            { id: 1, name: 'Cleaning', description: 'Vacuuming', completed: true },
            { id: 2, name: 'Buy a pillow', description: 'Need to find pink and grey pillow', completed: false },
            { id: 3, name: 'Math homework', description: 'Test number 3', completed: true },
            { id: 4, name: 'Science homework', description: 'Research about space', completed: false },
            { id: 5, name: 'English homework', description: 'Essay about rabbits', completed: false },
            { id: 6, name: 'Meeting with friends', description: '7 pm', completed: true },
            { id: 7, name: 'Packing for the trip', description: 'Need to remember about equipment', completed: false }
        ]
    }

    handleClick = (id, completed) => {
        this.setState(currentState => {
            let index = [...currentState.tasks].findIndex(el => el.id === id)
            currentState.tasks[index] = { ...currentState.tasks[index], completed: !completed }
            return {
                tasks: currentState.tasks
            }
        })
    }

    addNewTask = (name, description) => {
        this.setState((currentState) => {
            const newTask = {
                id: currentState.tasks.length + 1,
                name: name,
                description: description,
                completed: false
            }
            const newTasks = [newTask, ...currentState.tasks]
            console.log(newTasks)
            return {
                tasks: newTasks,
            }
        })
    }

    render() {
        return (
            <div>
                <TaskAdd addNewTask={this.addNewTask} />
                <div>
                    {this.state.tasks.map(i => <Task key={i.id} name={i.name} description={i.description}
                        completed={i.completed} onClick={() => this.handleClick(i.id, i.completed)} />)}
                </div>
            </div>
        )
    }
}

export default TaskList;