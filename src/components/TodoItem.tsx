import React, { FC } from 'react'

import { AiFillDelete } from 'react-icons/ai'

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
    const cls: string = `${style['todo-item']} ${todo.complete ? style['complete'] : ''}`
    return (
        <div className={cls}>
            <span className={style['todo-content']}>{todo.content}</span>
            <span className={style['todo-action']}>
                <AiFillDelete style={{ color: '#ccc' }} />
            </span>
        </div>
    )
}

export default TodoItem