import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <p className='center'>poka del net</p>
  }
  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label htmlFor="">
              <input type="checkbox" checked={todo.completed}/>
              <span onClick={onToggle.bind(null, todo.id)}>{todo.title}</span>
              <i className='material-icons red-text' onClick={() => onRemove(todo.id)}>delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
