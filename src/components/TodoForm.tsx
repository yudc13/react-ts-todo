import React, { FC, useState } from 'react'

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
		<div className="todo-form">
			<input value={value} onChange={handleInput} />
			<button onClick={handleAddTodo}>add</button>
		</div>
	)
}

export default TodoForm
