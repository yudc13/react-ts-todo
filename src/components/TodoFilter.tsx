import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from '../store/hooks'
import { filterTodoActionCreator, FilterType } from '../store/todo/todoActions'

import TodoFilterLink from './TodoFilterLink'

import style from './TodoFilter.module.css'
import { Todo } from './TodoItem'

const getActiveTodoCount = (todoList: Todo[]): number => {
  return todoList.filter((todo) => !todo.complete).length
}

const TodoFilter: React.FC = () => {
  const todoList = useSelector(state => state.todoList)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const count = useMemo<number>(() => getActiveTodoCount(todoList), [todoList])
  const filterList: FilterType[] = ['All', 'Active', 'Completed']
  const handleFilter = (e: React.MouseEvent<HTMLSpanElement>, filter: FilterType) => {
    const action = filterTodoActionCreator(filter)
    dispatch(action)
  }
  return (
    <div className={style['todo-filter']}>
      <span>{count} item left</span>
      <span className={style['todo-filter__btn']}>
        {filterList.map(item => <TodoFilterLink key={item} filter={item} active={item === filter} onFiler={handleFilter} />)}
      </span>
      <span>Clear Completed</span>
    </div>
  )
}

export default TodoFilter
