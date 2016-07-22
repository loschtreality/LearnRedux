var redux = require('redux');

console.log('starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
}


var store = redux.createStore(reducer)
var currentState = store.getState()
console.log(currentState);

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: "something interesting"
})

console.log('shoud show something interesting', store.getState());
