var redux = require('redux');

console.log('starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
}


var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

var unsubscribe = store.subscribe(() =>{
  var state = store.getState()
  console.log(state.searchText);
  document.getElementById('app').innerHTML = state.searchText
})


store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: "something interesting"
})
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: "something else"
})
