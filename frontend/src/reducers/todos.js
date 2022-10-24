import { CREATE, FETCH_ALL, DELETE, DELETE_ALL, UPDATE } from '../constants/actionTypes';

const todos = (todos = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...todos, action.payload];
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return todos.map(todo => (todo._id === action.payload._id ? action.payload : todo));
    case DELETE:
      return todos.filter(todo => todo._id !== action.payload);
    case DELETE_ALL:
      return [];
    default:
      return todos;
  }
};

export default todos;
