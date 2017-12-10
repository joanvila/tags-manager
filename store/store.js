import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

export const tags = (state = {tags: []}, action) => {
    switch (action.type) {
        case 'ADD':
          return {
            ...state,
            tags: [...state.tags, action.newItem]
          }
        default:
            return state;
    }
}

let combinedReducers = combineReducers({
    tags,
});

let store = createStore(
    combinedReducers,
    applyMiddleware(thunk));

store.subscribe((...args) => { console.log(store.getState()) })

export default store;
