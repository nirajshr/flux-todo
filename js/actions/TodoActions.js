var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  },
  remove: function (id) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_REMOVE,
      id: id
    });
  }
};

module.exports = TodoActions;
