import React, { FC, useState } from 'react'

import { useDispatch } from 'react-redux'

import style from './TodoForm.module.css'
import {addTodoActionCreator} from '../store/todo/todoActions'

const TodoForm: FC = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const handleAddTodo = () => {
		if (!value.trim()) { return }
		const action = addTodoActionCreator(new Date().getTime(), value.trim())
		dispatch(action)
		setValue('')
	}
	const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			handleAddTodo()
		}
	}
	return (
		<div className={style['todo-form']}>
			<input className={style['input']} value={value} onChange={handleInput} onKeyUp={handleKeyUp} />
			<button className={style.btn} onClick={handleAddTodo}>+</button>
		</div>
	)
}

export default TodoForm
