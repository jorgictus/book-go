import { post , get } from "../utils/http";

export function addBookToFavorites(volumeId, authToken) {
  return post("mylibrary/bookshelves/0/addVolume", authToken, volumeId);
}


export function removeBookToFavorites(volumeId, authToken) {
  return post("mylibrary/bookshelves/0/removeVolume", authToken, volumeId);
}


export function getFavoriteBook(filters ,authToken:string) {
  return get("mylibrary/bookshelves/0/volumes", filters, authToken);
}
