import { uuidv4 } from '../util/uuidv4';

const initialTagManagerState = {
  categories: [],
};

const categories = (state = initialTagManagerState, action) => {
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
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter(category => category.key !== action.categoryKey)
      };
    case 'ADD_TAG_TO_CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.key === action.categoryKey) {
            // TODO: Add the tag only if it doesn't exist
            return {
              ...category,
              tags: [...category.tags, action.tag]
            };
          }
          return category;
        }),
      };
    case 'DELETE_TAG_FROM_CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.key === action.categoryKey) {
            console.log(category);
            return {
              ...category,
              tags: category.tags.filter(tag => tag !== action.tag)
            };
          }
          return category;
        }),
      };
    default:
      return state;
  }
};

export { categories };
