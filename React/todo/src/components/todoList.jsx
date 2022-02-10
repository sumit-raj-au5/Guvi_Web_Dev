import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function todoList(props) {
  return (
    <>
    <Container>
    <Row className="todo-item" key={props.id}>
    <Col xs={3}>
        <div className="checker ">
            <input
              type="checkbox"
              id={props.id}
              onChange={props.handleTaskClick}
              checked={props.completed}
            />
        </div>
        <label htmlFor={props.id}>
          {props.completed ? <del>{props.toDoValue}</del> : props.toDoValue}
        </label>
        </Col>
        <Col xs={9}>
        <FontAwesomeIcon icon={faCircleXmark} color="red" onClick={props.handleDelete} name={props.id}/>
        </Col>
        
      </Row>
      </Container>
      </>
  )
}

export default todoList