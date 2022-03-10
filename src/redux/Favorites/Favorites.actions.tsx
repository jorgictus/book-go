/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBookAsFavorite } from "./Favorites.slice";
import * as service from "../../services/favorites.service";

export const getFavoriteBook = createAsyncThunk(
  "Favorites/GetFavoriteBooks",
  ({ filters, authToken }: any, { rejectWithValue }) =>
    service
      .getFavoriteBook(filters, authToken)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return rejectWithValue(error);
      })
);

interface addBookToFavoritesParams {
  volumeId: string | string[];
  authToken: string | unknown;
}

export const addBookToFavorites = createAsyncThunk(
  "Favorites/AddBookToFavorites",
  (
    { volumeId, authToken }: addBookToFavoritesParams,
    { dispatch, rejectWithValue }
  ) => {
    return service
      .addBookToFavorites(volumeId, authToken)
      .then(() => {
        dispatch(setBookAsFavorite(true));
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);

interface removeBookToFavoritesParams {
  volumeId: string | string[];
  authToken: string | unknown;
}

export const removeBookToFavorites = createAsyncThunk(
  "Favorites/RemoveBookToFavorites",
  (
    { volumeId, authToken }: removeBookToFavoritesParams,
    { dispatch, rejectWithValue }
  ) => {
    return service
      .removeBookToFavorites(volumeId, authToken)
      .then(() => {
        dispatch(setBookAsFavorite(false));
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);
