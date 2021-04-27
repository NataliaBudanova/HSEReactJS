import styles from './App.module.css';
import React from 'react';


const Task = (props) => {
  const handleClick = () => {
    return (
      console.log(props.id + ' completed status = ' + props.completed)
    )
  }

  return (
    <div className={styles.tasks}>
      <div key={props.name} className={styles.name}>{props.name}</div>
      <div key={props.description} className={styles.description}>{props.description}</div>
      <div key={props.completed} className={styles.completed}>Completed: {String(props.completed)}</div>
      <button onClick={handleClick} className={styles.button}>DONE</button>
    </div>
  )
}

class MyTodoList extends React.Component {
  state = {
    tasks: [
      { id: 1, name: 'Cleaning', description: 'Vacuuming', completed: true },
      { id: 2, name: 'Buy a pillow', description: 'Need to find pink and grey pillow', completed: false },
      { id: 3, name: 'Math homework', description: 'Test number 3', completed: true },
      { id: 4, name: 'Science homework', description: 'Research about space', completed: false },
      { id: 5, name: 'English homework', description: 'Essay about rabbits', completed: false },
      { id: 6, name: 'Meeting with friends', description: '7 pm', completed: true },
      { id: 7, name: 'Packing for the trip', description: 'Need to remember about equipment', completed: false }
    ]
  }

  render() {
    return (
      <div>
        {this.state.tasks.map(i => <Task id={i.id} name={i.name} description={i.description}
        completed={i.completed} />)}
      </div>
    )
  }
}

const App = () => {
    return (
      <div>
        <MyTodoList />
      </div>
    )
  }

  export default App;
