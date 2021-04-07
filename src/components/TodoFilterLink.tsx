import React from 'react'
import { FilterType } from '../store/todo/todoActions'
import style from './TodoFilterLink.module.css'

export interface Props {
  filter: FilterType
  active: boolean
  onFiler: (e: React.MouseEvent<HTMLSpanElement>, filter: FilterType) => void
}

const TodoFilterLink: React.FC<Props> = (props) => {
  const cls = `${style['todo-filter-link']} ${props.active ? style['active'] : ''}`
  return (
    <span className={cls} onClick={(e) => props.onFiler(e, props.filter)}>
      {props.filter}
    </span>
  )
}

export default TodoFilterLink
