import React, { useContext, useState, useEffect } from 'react';
import { TodosContext } from './App';
import { Table, Form, Button } from 'react-bootstrap';
import useAPI from './useAPI';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
  const { state, dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const buttonTitle = editMode ? "Edit" : "Add";
  const endpoint = "http://localhost:3000/todos/";
  // const endpoint = "http://192.168.133.170:3001";

  const savedTodos = useAPI(endpoint);

  useEffect(() => {
    if (savedTodos) {
      dispatch({ type: "get", payload: savedTodos });
    }
  }, [savedTodos, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editMode) {
        await axios.patch(`${endpoint}${editTodo.id}`, { text: todoText });
        dispatch({
          type: 'edit',
          payload: { ...editTodo, text: todoText }
        });
        setEditMode(false);
        setEditTodo(null);
      } else {
        const newToDo = { id: uuidv4(), text: todoText };
        await axios.post(endpoint, newToDo);
        dispatch({ type: 'add', payload: newToDo });
      }
      setTodoText("");
    } catch (error) {
      console.error("Error while submitting todo:", error);
    }
  };

  const handleEditClick = (todo) => {
    setTodoText(todo.text);
    setEditMode(true);
    setEditTodo(todo);
  };

  const handleDeleteClick = async (todo) => {
    try {
      await axios.delete(`${endpoint}${todo.id}`);
      dispatch({ type: 'delete', payload: todo });
    } catch (error) {
      console.error("Error while deleting todo:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter To Do"
            onChange={event => setTodoText(event.target.value)}
            value={todoText}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {buttonTitle}
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(state.todos) && state.todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>
                <Button variant="link" onClick={() => handleEditClick(todo)}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="link" onClick={() => handleDeleteClick(todo)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ToDoList;
