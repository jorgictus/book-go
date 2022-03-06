import {
  createSlice, isPending, isFulfilled, isRejected,
} from '@reduxjs/toolkit';

import { getBooks } from './Books.actions';

export interface  FiltersTypes {
  q : string
}

interface InitalState {
  filters: any;
  isLoading: boolean;
  data : any;
}

const filtersDefault = {
  q : ""
}
export const initialState: InitalState = {
  filters: filtersDefault,
  isLoading: false,
  data: null,
};

const Books = createSlice({
  name: 'getBooks',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
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
  },
});

export const {
  changeFilter,
} = Books.actions;

export { getBooks };

export default Books.reducer;
