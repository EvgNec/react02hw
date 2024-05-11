import React, { Component } from 'react';
import TodoList from './TodoList';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import Dropdown from './Dropdown';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'text1', completed: true },
      { id: 'id-2', text: 'text2', completed: true },
      { id: 'id-3', text: 'text3', completed: false },
    ],
    good: 0,
    neutral: 0,
    bad: 0,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <h1>State component</h1>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>All {todos.length}</p>
          <p>Run {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />{' '}
      </>
    );
  }
}

export default App;
