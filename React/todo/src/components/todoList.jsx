import React from 'react'

function todoList(props) {
  return (
    <div className="todo-item" key={props.id}>
        <div className="checker">
          <span>
            <input
              type="checkbox"
              id={props.id}
              onChange={props.handleTaskClick}
              checked={props.completed}
            />
          </span>
        </div>
        <label htmlFor={props.id}>
          {props.completed ? <del>{props.toDoValue}</del> : props.toDoValue}
        </label>
      </div>
  )
}

export default todoList