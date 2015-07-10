const React = require('react')
, TodoActions = require('../actions/TodoActions.js')

var TodoItem = React.createClass({
  _onRemoveClick: function () {
  console.log("Removing: " + this.props.todo.id);
    TodoActions.remove(this.props.todo.id);
  },
  render: function () {
    return (
      <li><span>{this.props.todo.text}</span> <button onClick={this._onRemoveClick}>X</button></li>
    );
  }
});

module.exports = TodoItem;
