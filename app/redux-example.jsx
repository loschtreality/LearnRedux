var redux = require('redux');

console.log('Starting redux example');

// Name reducer and action generators
// ----------------
var nameReducer = (state = 'Anonymous',action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
    return state

  }
}

var changeName = (name) => {
  return {
    type: "CHANGE_NAME",
    name
  }
}

// Hobbies reducer and action generators
// ----------------
var nextHobbyID = 1
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

var addHobby = (newHobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: newHobby
  }
}

var removeHobby = (hobby_id) => {
  return {
    type: "REMOVE_HOBBY",
    id: hobby_id
  }
}


// MOvies reducer and action generators
// ----------------
var nextMovieID = 1
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

var addMovie = (title, genre) => {
  return {
  type: "ADD_MOVIE",
  movie: title,
  genre
  }
}

var removeMovie = (movie_id) => {
  return {
  type: "REMOVE_MOVIE",
  id: movie_id
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


  document.getElementById('app').innerHTML = state.name


  console.log('new state ', store.getState());
  }
)
// unsubscribe()

var currentState = store.getState()



store.dispatch(changeName('Michael'))

store.dispatch(addHobby('Running'))

store.dispatch(addHobby('Walking'))

store.dispatch(removeHobby(1))

store.dispatch(changeName("Loren"))

store.dispatch(addMovie('Fight Club','Fiction'))

store.dispatch(addMovie('Batman', 'Fiction'))

store.dispatch(removeMovie(1))
