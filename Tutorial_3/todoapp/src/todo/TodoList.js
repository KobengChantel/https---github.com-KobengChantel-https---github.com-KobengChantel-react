import React from "react"; // Import React

class TodoList extends React.Component {
  render() {
    return (
      // Render an unordered list with Bootstrap classes for styling
      <ul className="list-group list-group-flush">
        {
          // Map over the items passed as props to render each todo item
          this.props.items.map((value, index) => {
            return (
              // Use React.Fragment to wrap each list item, setting a unique key
              <React.Fragment key={index}>
                {/* Render a list item with Bootstrap classes for styling and spacing */}
                <li className="list-group-item bg-light d-flex justify-content-between">
                  {value} {/* Display the todo item value */}
                  {/* Render a button to delete the todo item */}
                  <button
                    className="btn text-danger badge"
                    onClick={() => { this.props.deleteTodo(index) }} // Call the deleteTodo method passed as a prop with the current index
                  >
                    X {/* Button label */}
                  </button>
                </li>
              </React.Fragment>
            );
          })
        }
      </ul>
    );
  }
}

export default TodoList; // Export the TodoList component
