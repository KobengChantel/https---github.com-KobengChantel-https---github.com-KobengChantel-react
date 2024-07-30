import React from "react";
import TodoList from "./TodoList"; // Import the TodoList component

class TodoApp extends React.Component {
  constructor() {
    super();
    // Initialize state with inputData and todoItems
    this.state = {
      inputData: "",
      todoItems: []
    };
  }

  // Method to handle changes in the input field
  changeTodoInput = (event) => {
    this.setState({ inputData: event.target.value });
  }

  // Method to add a new todo item
  addTodo = () => {
    if (this.state.inputData !== '') {
      // Create a new array with the existing todoItems and the new inputData
      let newTodoItems = [...this.state.todoItems, this.state.inputData];
      // Update the state with the new array and clear the input field
      this.setState({ todoItems: newTodoItems, inputData: "" });
    }
  }

  // Method to delete a todo item based on its index
  deleteTodo = (index) => {
    // Create a copy of the current todoItems array
    let todoItems = [...this.state.todoItems];
    // Filter out the item that matches the index
    let newTodoItems = todoItems.filter((value, key) => {
      return index !== key;
    });
    // Update the state with the new array
    this.setState({ todoItems: newTodoItems });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="text-center">React Todo App</h3>
            <div className="input-group">
              {/* Input field for entering new todo items */}
              <input
                type="text"
                placeholder="Enter Something"
                className="form-control"
                onChange={this.changeTodoInput}
                value={this.state.inputData}
              />
              <div className="input-group-append">
                {/* Button to add a new todo item */}
                <span className="btn btn-success" onClick={this.addTodo}>Add</span>
              </div>
            </div>
            {/* Render the TodoList component and pass the todo items and delete method as props */}
            <TodoList items={this.state.todoItems} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp; // Export the TodoApp component
