import React, { Component } from 'react';
import TodoList from './TodoList';
// import ColorPicker from './ColorPicker';
// import Counter from './Counter';
// import Dropdown from './Dropdown';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'text1', completed: false },
      { id: 'id-2', text: 'text2', completed: false },
      { id: 'id-3', text: 'text3', completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => (
      {
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }
  ))
}

  render() {
    const { todos } = this.state;

    return (
      <>
        <h1>State component</h1>
        {/* <Counter initialValue={10} /> 
      <Dropdown />
      <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos}
          onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
