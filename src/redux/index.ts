import {
  ThunkAction,
  configureStore,
  combineReducers,
  Action,
} from "@reduxjs/toolkit";
import BooksReducer from "./Books/Books.slice";
import FavoriteReducer from "./Favorites/Favorites.slice";

export const appReducer = combineReducers({
  BooksReducer,
  FavoriteReducer,
});

const store = configureStore({
  reducer: appReducer,
});

// Tipagens a serem usadas pelos hooks
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
