import { API_CONSTANTS } from './constants';

class Api {
  static get(url, params) {
    const urlParams = { ...API_CONSTANTS, ...params};
    url = url + Api.encodeQueryString(urlParams);
    return fetch(url)
      .then(res => res.json())
      .catch(err => err);
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