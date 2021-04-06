import React, { FC } from 'react'

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
    const cls: string = `todo-item ${todo.complete ? 'complete' : ''}`
    return (
        <div className={cls}>{todo.content}</div>
    )
}

export default TodoItem