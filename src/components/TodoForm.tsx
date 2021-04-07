import React, { FC, useState } from 'react'

import style from './TodoForm.module.css'

const TodoForm: FC = () => {
	const [value, setValue] = useState('')
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	/**
	 * TODO:
	 * @returns void
	 */
	const handleAddTodo = () => {
		if (!value.trim()) { return }
	}
	return (
		<div className={style['todo-form']}>
			<input className={style['input']} value={value} onChange={handleInput} />
			<button className={style.btn} onClick={handleAddTodo}>+</button>
		</div>
	)
}

export default TodoForm
