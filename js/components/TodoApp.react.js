const React = require('react')
, TodoStore = require('../stores/TodoStore')
, TodoActions = require('../actions/TodoActions')
, TodoList = require('./TodoList.react');

const ENTER_KEY_CODE = 13;

var TodoInput = React.createClass({
  getInitialState: function () {
    return {
      value: ''
    };
  },
  _save: function () {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },
  _onChange: function(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  },
  render: function () {
    return (
          <input
            onBlur={this._save}
            onChange={this._onChange}
            onKeyDown={this._onKeyDown}
            value={this.state.value}
            autoFocus={true}
          />
        );
    }
});

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoStore.getAll()
    };
  },
  componentDidMount: function () {
    TodoStore.addChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState({
      todos: TodoStore.getAll()
    });
  },
  _onSave: function (text) {
    if (text.trim()) {
      TodoActions.create(text)
    }
  },
  render: function () {
    var todos = this.state.todos;
    return (
      <div>
        <h1>Todo App!</h1>
        <TodoInput onSave={this._onSave}/>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
