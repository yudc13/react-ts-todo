import React, { FC, useMemo } from 'react'
import { useSelector } from '../store/hooks'
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED, FilterType } from '../store/todo/todoActions'

import TodoItem, { Todo } from './TodoItem'

import style from './TodoList.module.css'


const getFilterTodoList = (todoList: Todo[], filter: FilterType): Todo[] => {
    switch (filter) {
        case FILTER_ACTIVE:
            return todoList.filter((todo) => !todo.complete)
        case FILTER_COMPLETED:
            return todoList.filter((todo) => todo.complete)
        case FILTER_ALL:
        default:
            return todoList
    }
}

const TodoList: FC = () => {
    const filter = useSelector(state => state.filter)
    const todoList = useSelector((state) => state.todoList)
    const filterTodoList = useMemo<Todo[]>(() => getFilterTodoList(todoList, filter), [todoList, filter])
    return (
        <div className={style['todo-list']}>
            {filterTodoList.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}

export default TodoList

