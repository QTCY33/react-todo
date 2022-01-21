import React from "react";

function Todo(props) {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
  }
  const completeHandler = () => {
    props.setTodos(props.todos.map((item) => {
      if (item.id === props.todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }
  return (
    <div className='todo'>
      <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>{props.text}
        <button className='complete-btn' onClick={completeHandler}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-gou"></use>
          </svg>
        </button>
        <button className="trash-btn" onClick={deleteHandler}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-lajitong"></use>
          </svg>
        </button>
      </li>

    </div>
  )
}

export default Todo