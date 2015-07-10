const React = require('react')
, TodoItem = require('./TodoItem.react');

var TodoList = React.createClass({
  render: function () {
    var all_todos = this.props.todos;
    var todos = [];

    for (var key in all_todos) {
      todos.push(<TodoItem key={key} todo={all_todos[key]} />);
    }

    return (
      <ul>
        {todos}
      </ul>
    );
  }
});

module.exports = TodoList;
