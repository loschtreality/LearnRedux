var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: "Anonymous",
  hobbies: [],
  movies: []
}
var nextHobbyID = 1
var nextMovieID = 1
var oldReducer = (state = stateDefault,action) => {

  switch (action.type) {
    case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    }
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyID++,
            hobby: action.hobby
          }
        ]
      }
    case 'ADD_MOVIE':
      return{
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieID++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      }
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
        }
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((film) => film.id !== action.id)
        }

    default:
    return state
  }
}

var nameReducer = (state = 'Anonymous',action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
    return state

  }
}

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyID++,
          hobby: action.hobby
        }
      ]
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id !== action.id)

    default:
      return state
  }
}

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      movies: return [
        ...state,
        {
          id: nextMovieID++,
          movie: action.movie,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      movies: return state.filter((film) => film.id !== action.id)
    default:
      return state
  }
}
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// Subscribe to changes

var unsubscribe = store.subscribe(
  () => {
  var state = store.getState()

  // console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name


  console.log('new state ', store.getState());
  }
)
// unsubscribe()

var currentState = store.getState()

// console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Michael'
})


store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
})

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
})

store.dispatch({
  type: "REMOVE_HOBBY",
  id: 2
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Loren'
})

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Fight Club',
  genre: 'Fiction',
})

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Batman',
  genre: 'Fiction',
})

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
})
