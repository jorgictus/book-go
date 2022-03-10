import {
  addBookToFavorites,
  getFavoriteBook,
  removeBookToFavorites,
} from "./favorites.service";
import axios from "axios";
import { getHeadersWithAutorizationToken } from "../utils/http/getHeaders";

const baseGoogleURL =
  process.env.NEXT_PUBLIC_GOOGLE_BASE_URL ||
  "https://www.googleapis.com/books/v1/";

jest.mock("axios");

describe("Favorites Services", () => {
  it("should call getFavoriteBook()", async () => {
    axios.get.mockResolvedValueOnce({ status: 200 });

    const params = { startIndex: 1, maxResults: 10 };
    await getFavoriteBook(params, "token");

    expect(axios.get).toHaveBeenCalledWith(
      `${baseGoogleURL}mylibrary/bookshelves/0/volumes`,
      {
        ...getHeadersWithAutorizationToken({authToken : "token", params }),
      }
    );
  });

  it("should call getBookByVolumeId()", async () => {
    axios.post.mockResolvedValueOnce({ status: 200 });

    await addBookToFavorites("anyBookId", "token");

    expect(axios.post).toHaveBeenCalledWith(
      `${baseGoogleURL}mylibrary/bookshelves/0/addVolume`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer token`,
        },
        params: {
          volumeId: "anyBookId",
        },
      }
    );
  });

  it("should call removeBookToFavorites()", async () => {
    axios.post.mockResolvedValueOnce({ status: 200 });

    await removeBookToFavorites("anyBookId", "token");

    expect(axios.post).toHaveBeenCalledWith(
      `${baseGoogleURL}mylibrary/bookshelves/0/removeVolume`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer token`,
        },
        params: {
          volumeId: "anyBookId",
        },
      }
    );
  });
});
