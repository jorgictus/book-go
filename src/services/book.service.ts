import { get } from "../utils/http";

export function getBook(filters, authToken) {
  return get("volumes", filters, authToken);
}

export function getBookByVolumeId(volumeId, authToken) {
  return get(`volumes/${volumeId}`, null,  authToken);
}
  