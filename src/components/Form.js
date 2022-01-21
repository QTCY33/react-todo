import React from "react";

function Form(props) {
  const inputTextHandle = (e) => {
    props.setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();

    if(props.inputText){
    props.setTodos([
      ...props.todos, { text: props.inputText, completed: false, id: Math.random() * 1000 }
    ])
      props.setInputText('')
    }
  }
  const statusHandler = (e) => {
    props.setStatus(e.target.value)
  }
  return (
    <form>
      <input value={props.inputText} onChange={inputTextHandle} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-plus-square"></use>
        </svg>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onClick={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form