import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { uuidv4 } from '../util/uuidv4';

const initialTagManagerState = {
  categories: [],
};

export const categories = (state = initialTagManagerState, action) => {
  // TODO: Implement a byId and byHash store to perform efficient selectors
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            key: uuidv4(),
            name: action.newCategory,
            tags: [],
          }
        ]
      };
    case 'ADD_TAG_TO_CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.key === action.categoryKey) {
            // TODO: Add the tag only if it doesn't exist
            return {
              ...category,
              tags: [...category.tags, action.tag]}
          }
          return category;
        }),
      };
    default:
      return state;
  }
};

let combinedReducers = combineReducers({
  categories,
});

let store = createStore(
  combinedReducers,
  applyMiddleware(thunk)
);

store.subscribe((...args) => { console.log(store.getState()) });

export default store;
