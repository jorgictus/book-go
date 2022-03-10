import { getBook, getBookByVolumeId } from "./book.service";
import axios from "axios";
import { getHeadersWithAutorizationToken } from "../utils/http/getHeaders";

jest.mock("axios");

const baseGoogleURL =
  process.env.NEXT_PUBLIC_GOOGLE_BASE_URL ||
  "https://www.googleapis.com/books/v1/";

describe("GetBook Service", () => {
  const mockFilters = {
    q: "Homem aranha",
    startIndex: 1,
    maxResults: 12,
  };

  it("should call getBook()", async () => {
    axios.get.mockResolvedValueOnce({ status: 200 });

    await getBook(mockFilters, "authtoken");

    expect(axios.get).toHaveBeenCalledWith(`${baseGoogleURL}volumes`, {
      ...getHeadersWithAutorizationToken({
        authToken: "authtoken",
        params: { ...mockFilters },
      }),
    });
  });

  it("should call getBookByVolumeId()", async () => {
    axios.get.mockResolvedValueOnce({ status: 200 });

    await getBookByVolumeId("123", "authtoken");

    expect(axios.get).toHaveBeenCalledWith(`${baseGoogleURL}volumes/123`, {
      ...getHeadersWithAutorizationToken({
        authToken: "authtoken",
        params: {},
      }),
    });
  });
});
