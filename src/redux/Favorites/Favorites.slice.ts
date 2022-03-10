import {
  createSlice,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";

import {
  getFavoriteBook,
  addBookToFavorites,
  removeBookToFavorites,
} from "./Favorites.actions";

interface InitalState {
  data: any;
  isLoading: boolean;
  isFavorite: boolean;
  pagination: {
    currentPage: number;
  };
}

export const initialState: InitalState = {
  data: null,
  isLoading: true,
  isFavorite: false,
  pagination: {
    currentPage: 1,
  },
};

const Favorite = createSlice({
  name: "getFavoriteBook",
  initialState,
  reducers: {
    clearData: (state) => {
      state.isLoading = true;
      state.data = null;
      state.pagination = {
        currentPage: 1,
      };
    },
    changePage: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    setBookAsFavorite: (state, action) => {
      state.isFavorite = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(getFavoriteBook), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled(getFavoriteBook), (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addMatcher(isRejected(getFavoriteBook), (state) => {
      state.isLoading = false;
    });
  },
});

export const { changePage, clearData, setBookAsFavorite } = Favorite.actions;

export { getFavoriteBook, addBookToFavorites, removeBookToFavorites };

export default Favorite.reducer;
