import axios from 'axios';

const baseGoogleURL = "https://www.googleapis.com/books/v1/"
export function get(
    params: any,
    url: string,
  ) {
    return axios
      .get(baseGoogleURL + url, {
        params : {...params, key : "AIzaSyBYymmcV0vHTfSuVDYxtW2PEMjtE1sp268"},
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  

  // AIzaSyBYymmcV0vHTfSuVDYxtW2PEMjtE1sp268