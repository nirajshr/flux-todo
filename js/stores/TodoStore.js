const AppDispatcher = require('../dispatcher/AppDispatcher')
, TodoConstants = require('../constants/TodoConstants')
, EventEmitter = require('events').EventEmitter
, assign = require('object-assign');

const CHANGE_EVENT = 'change';
var _todos = {};


function create(text) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
  console.log("Creating new one");
}

function remove(id) {
  console.debug("yes removing: " + id);
  delete _todos[id];
}

var TodoStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    return _todos;
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case TodoConstants.TODO_CREATE:
      create(action.text);
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_REMOVE:
      remove(action.id);
      TodoStore.emitChange();
      break;
    default:
  }
});

module.exports = TodoStore;
