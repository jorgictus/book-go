import axios from "axios";

const baseGoogleURL =
  process.env.NEXT_PUBLIC_GOOGLE_BASE_URL ||
  "https://www.googleapis.com/books/v1/";

export function post(url: string, authToken: string, volumeId?: string) {
  return axios
    .post(
      baseGoogleURL + url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        params: {
          volumeId: volumeId,
        },
      }
    )
    .catch((error) => {
      return Promise.reject(error);
    });
}
