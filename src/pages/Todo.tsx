import React, { FC } from 'react'
import TodoHeader from '../components/TodoHeader'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

import style from './Todo.module.css'

const Todo: FC = () => {
	return (
		<div className={style.todo}>
			<TodoHeader />
			<TodoForm />
			<TodoList />
		</div>
	)
}

export default Todo
