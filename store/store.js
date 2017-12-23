import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

const initialTagManagerState = {
  categories: [],
};

export const categories = (state = initialTagManagerState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            key: action.newCategory.replace(/\s+/g, ''),
            name: action.newCategory,
            tags: [],
          }
        ]
      }
    default:
      return state;
  }
}

let combinedReducers = combineReducers({
  categories,
});

let store = createStore(
  combinedReducers,
  applyMiddleware(thunk)
);

store.subscribe((...args) => { console.log(store.getState()) });

export default store;
