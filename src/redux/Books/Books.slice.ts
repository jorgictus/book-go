import {
  createSlice,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";

import { getBooks, getBookByVolumeId } from "./Books.actions";

export interface filtersProps {
  q: string;
  startIndex?: number;
  maxResults?: number;
}
interface InitalState {
  data: any;
  filters: filtersProps;
  isLoading: boolean;
  pagination: any;
  bookData: any;
}

export const initialState: InitalState = {
  data: null,
  bookData: null,
  isLoading: true,
  pagination: {
    currentPage: 1,
  },
  filters: {
    q: "",
    startIndex: 0,
    maxResults: 12,
  },
};

const Books = createSlice({
  name: "getBooks",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearData: (state) => {
      state.isLoading = true;
      state.data = initialState.data;
      state.pagination = {
        currentPage: 1,
      };
    },
    clearBookData: (state) => {
     
      state.bookData = initialState.bookData;
    },
    changePage: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(getBooks), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled(getBooks), (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addMatcher(isRejected(getBooks), (state) => {
      state.isLoading = false;
    });

    builder.addMatcher(isPending(getBookByVolumeId), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled(getBookByVolumeId), (state, action) => {
      state.bookData = action.payload;
      state.isLoading = false;
    });
    builder.addMatcher(isRejected(getBookByVolumeId), (state) => {
      state.isLoading = false;
    });
  },
});

export const { changeFilter, changePage, clearData, clearBookData } =
  Books.actions;

export { getBooks, getBookByVolumeId };

export default Books.reducer;
