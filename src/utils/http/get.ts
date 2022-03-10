import axios from "axios";
import { getHeadersWithAutorizationToken } from "./getHeaders";

const baseGoogleURL =
  process.env.NEXT_PUBLIC_GOOGLE_BASE_URL ||
  "https://www.googleapis.com/books/v1/";


export function get(url: string, params?: any, authToken?: string) {
  return axios
    .get(baseGoogleURL + url, {
      ...getHeadersWithAutorizationToken({ authToken, params }),
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
