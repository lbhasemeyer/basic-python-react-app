import { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('RETRIEVE from TodoList');
    this.props.actions.retrieve();
  }

  removeTodo(id) {
    console.log('REMOVE from TodoList');
    this.props.actions.remove(id);
  }

  render() {
    const todoItems = this.props.todos.map((item, index) =>
      <Todo key={item.id} title={item.title} removeTodo={this.removeTodo.bind(this, item.id)} />
    );

    return (
      <ul className="todo-list">
        {todoItems}
      </ul>
    );
  }
}
