import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';

export class TodoApp extends Component {
  render() {
    const { todos, todoActions } = this.props;

    return (
      <div>
        <TodoList todos={todos} actions={todoActions} />
        <TodoAdd actions={todoActions} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
