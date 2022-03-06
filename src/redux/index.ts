import { configureStore, combineReducers } from '@reduxjs/toolkit'
import BooksReducer from './Books/Books.slice'
export const appReducer = combineReducers({
  BooksReducer
});

const store = configureStore({
  reducer: appReducer
})

export default store;