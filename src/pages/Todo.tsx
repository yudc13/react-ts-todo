import React, { FC } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

import style from './Todo.module.css'

const Todo: FC = () => {
	return (
		<div className={style.todo}>
			<TodoForm />
			<TodoList />
		</div>
	)
}

export default Todo
