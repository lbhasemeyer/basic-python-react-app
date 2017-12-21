import { Component } from 'react';
import './Todo.scss';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{ this.props.title } <a className="remove" onClick={this.props.removeTodo}>✖</a></li>
    );
  }
}
