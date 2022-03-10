import { createAsyncThunk } from "@reduxjs/toolkit";
import { filtersProps } from "./Books.slice";
import * as service from "../../services/book.service";
interface getBookParams {
  filters: filtersProps;
  authToken: string | unknown;
}

export const getBooks = createAsyncThunk(
  "Books/getBooks",
  ({ filters, authToken }: getBookParams, { rejectWithValue }) => {
    return service
      .getBook(filters, authToken)
      .then((res) => res.data)
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);

interface getBookByVolumeIdParams {
  volumeId: string | string[];
  authToken: string | unknown;
}

export const getBookByVolumeId = createAsyncThunk(
  "Books/getBookByVolumeId",
  ({ volumeId, authToken }: getBookByVolumeIdParams, { rejectWithValue }) => {
    return service
      .getBookByVolumeId(volumeId, authToken)
      .then((res) => res.data)
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);
