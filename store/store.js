import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { categories } from './reducers';

const config = {
  key: 'tagsmanager',
  storage,
};

let combinedReducers = persistCombineReducers(config, {categories});

function configureStore () {
  let store = createStore(
    combinedReducers,
    applyMiddleware(thunk)
  );

  store.subscribe((...args) => { console.log(store.getState()) });

  let persistor = persistStore(store);

  return { persistor, store }
}

export default configureStore;
