import React from 'react'

import style from './TodoHeader.module.css'

const TodoHeader: React.FC = () => {
  return (
    <h3 className={style['todo-header']}>React Ts TodoList</h3>
  )
}

export default TodoHeader
