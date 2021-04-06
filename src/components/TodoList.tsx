import React, { FC } from 'react'

import TodoItem, { Todo } from './TodoItem'

const todoList: Todo[] = [
    { id: 1, content: 'study react', complete: false, },
    { id: 2, content: 'study typescript', complete: true, },
    { id: 3, content: 'study redux', complete: false, }
]

const TodoList: FC = () => {
    return (
        <div className="todo-list">
            {todoList.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}

export default TodoList

