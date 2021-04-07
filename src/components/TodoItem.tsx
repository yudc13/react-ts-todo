import React, { FC } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {deleteTodoActionCreator, toggleTodoActionCreator} from '../store/todo/todoActions'
import style from './TodoItem.module.css'

export interface Todo {
    id: number
    content: string
    complete: boolean
}

interface TodoProps {
    todo: Todo
}

const TodoItem: FC<TodoProps> = (props) => {
  const { todo } = props
  const dispatch = useDispatch()
  const cls: string = `${style['todo-item']} ${todo.complete ? style['complete'] : ''}`
  const handleDeleteTodo = () => {
    const action = deleteTodoActionCreator(todo.id)
    dispatch(action)
  }
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action = toggleTodoActionCreator(todo.id, e.target.checked)
    dispatch(action)
  }
  return (
    <div className={cls}>
      <span className={style['todo-content__wrapper']}>
        <input checked={todo.complete} type="checkbox" onChange={handleToggle} />
        <span className={style['todo-content']}>{todo.content}</span>
      </span>
      <span className={style['todo-action']}>
        <AiFillDelete onClick={handleDeleteTodo} style={{ color: '#ccc', fontSize: '18px' }} />
      </span>
    </div>
  )
}

export default TodoItem
