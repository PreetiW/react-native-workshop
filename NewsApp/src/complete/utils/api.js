import { API_CONSTANTS, BASE_URL } from './constants';

class Api {
  static get(url, params) {
    API_CONSTANTS = { ...API_CONSTANTS, params};
    url = url + Api.encodeQueryString(params);
    return fetch(url)
      .then(res => res.json())
      .catch(err => err.json());
  }

  static encodeQueryString(params) {
    const keys = Object.keys(params)
    return keys.length
      ? "?" + keys
          .map(key => encodeURIComponent(key)
              + "=" + encodeURIComponent(params[key]))
          .join("&")
      : ""
  }
}

export default Api;