import { Component } from 'react';

export default class TodoAdd extends Component {
  constructor(props) {
    super(props);

    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(e) {
    if (e.keyCode === 13) {
      this.props.actions.update(e.target.value.trim());
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" maxLength="200" onKeyDown={this.updateTodo} />
      </div>
    );
  }
}
