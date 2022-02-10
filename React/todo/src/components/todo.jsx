import React, { useState } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import ToDoList from "./todoList"

function Todo() {
  const [allToDoArray, setAllToDoArray] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [toDoArrayDisplay, setToDoArrayDisplay] = useState([])
  const [displayTaskFlag, setDisplayTaskFlag] = useState({
    all: true,
    active: false,
    completed: false,
  });

  function handleChange(event) {
    setNewToDo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("SubmittedToDo added");
    setAllToDoArray((preAllToDoArray) => [
      ...preAllToDoArray,
      { completed: false, toDoValue: newToDo },
    ]);
    updateCard()
    setNewToDo("");
  }

  function updateCard(){
    setToDoArrayDisplay(allToDoArray.map((todo)=>(todo)))
  }

  function handleTaskClick(event) {
    //console.log("task Clicked")
    let taskIndex = event.target.id;
    setAllToDoArray((prevAllToDoArray) =>
      prevAllToDoArray.map((todo) => {
        if (allToDoArray.indexOf(todo) !== +taskIndex) return todo;
        else {
          return { ...todo, completed: !todo.completed };
        }
      })
    );
  }

  const handleDisplay = (event) => {
    let { name } = event.target;
    if (name === "all") {
      setToDoArrayDisplay(allToDoArray.map((todo)=>(todo)))
    } else if (name === 'active') {
      setToDoArrayDisplay(allToDoArray.filter((todo)=>(!todo.completed)));
    } else if (name === 'completed') {
      setToDoArrayDisplay(allToDoArray.filter((todo)=>(todo.completed)));
    }

    setDisplayTaskFlag((prevFlag) => ({
      ...prevFlag,
      all: false,
      active: false,
      completed: false,
      [name]: true,
    }));

  };

  // Debug
  // console.log(newToDo);
  // console.log(allToDoArray);
  // console.log(displayTaskFlag);
  console.log(toDoArrayDisplay);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control add-task"
                    placeholder="New Task..."
                    value={newToDo}
                    onChange={handleChange}
                  />
                </form>

                <ul className="nav nav-pills todo-nav">
                  <li role="presentation" className="nav-item all-task active">
                    <Button
                      variant="link"
                      onClick={handleDisplay}
                      className="nav-link"
                      name="all"
                    >
                      All
                    </Button>
                  </li>
                  <li role="presentation" className="nav-item active-task">
                    <Button
                      variant="link"
                      onClick={handleDisplay}
                      className="nav-link"
                      name="active"
                    >
                      Active
                    </Button>
                  </li>
                  <li role="presentation" className="nav-item completed-task">
                    <Button
                      variant="link"
                      onClick={handleDisplay}
                      className="nav-link"
                      name="completed"
                    >
                      Completed
                    </Button>
                  </li>
                </ul>
                {toDoArrayDisplay.length?toDoArrayDisplay.map((todo)=>
                  <ToDoList key={toDoArrayDisplay.indexOf(todo)} id = {toDoArrayDisplay.indexOf(todo)} handleTaskClick={handleTaskClick} completed={todo.completed} toDoValue={todo.toDoValue}/>):"No Task"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
//TODO: Use flags and && logic to display All, completed and active
