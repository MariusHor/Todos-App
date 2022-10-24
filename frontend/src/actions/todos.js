import { CREATE, FETCH_ALL, DELETE, UPDATE, DELETE_ALL } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const createTodo = todo => async dispatch => {
  try {
    const { data } = await api.createTodo(todo);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const getTodos = () => async dispatch => {
  try {
    const { data } = await api.fetchTodos();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const updateTodo = (id, todo) => async dispatch => {
  try {
    const { data } = await api.updateTodo(id, todo);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = id => async dispatch => {
  try {
    await api.deleteTodo(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodos = () => async dispatch => {
  try {
    const { data } = await api.deleteTodos();
    dispatch({ type: DELETE_ALL, payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
