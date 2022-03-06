import { get } from "../utils/http-helper";

export function searchBook(filters) {
  return get(filters, "volumes");
}
