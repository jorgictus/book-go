/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../../services/book.service';

export const getBooks = createAsyncThunk('book',
  (filters: any, { dispatch, rejectWithValue }) => service
    .searchBook(filters)
    .then(res => res.data)
    .catch(error => {
      return rejectWithValue(error);
    }));
