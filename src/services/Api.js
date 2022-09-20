import axios from "axios";
import appStore from "AppStore";
import { _BASE_URL } from "config/url";
const { getState, setState } = appStore;

let _TIMER = null;
let _REQUESTS = {};
let _HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  // "Access-Control-Allow-Origin": "*",
};

class Api {
  url = "/";
  method = "get";
  data = {};
  headers = {};

  get(url, data = {}) {
    this._url = url;
    this._method = "get";
    this._params = data;
    return this;
  }

  post(url, data = {}) {
    this._url = url;
    this._method = "post";
    this._params = data;
    return this;
  }

  put(url, data = {}) {
    this._url = url;
    this._method = "put";
    this._params = data;
    return this;
  }

  data(data) {
    this._params = data;
    return this;
  }

  header(id, token) {
    _HEADERS["Auth-Id"] = id;
    _HEADERS["Auth-Token"] = token;
  }

  send(callback) {
    _REQUESTS[this._url] = {
      _url: this._url,
      _method: this._method,
      _params: this._params,
      callback: callback,
    };

    let _self = this;
    clearTimeout(_TIMER);
    _TIMER = setTimeout(() => {
      _self.processApiRequest();
    }, 1000);
  }

  processApiRequest() {
    let _keys = Object.keys(_REQUESTS);
    if (!_keys.length) {
      return;
    }

    let _self = _REQUESTS[_keys[0]];
    delete _REQUESTS[_keys[0]];
    _self._headers = _HEADERS;
    _self._base_url = _BASE_URL;
    _self.processApiRequest = this.processApiRequest;

    let request = {
      method: _self._method,
      headers: _self._headers,
      url: `${_self._base_url}${_self._url}`,
    };

    if (_self._method === "post") {
      request.data = _self._params;
    } else if (_self._method === "get") {
      request.data = _self._params;
    } else if (_self._method === "put") {
      request.data = _self._params;
    }

    // setState({ loading: true });
    axios(request)
      .then((response) => {
        _self.processApiRequest();
        _self.callback(response.data);
        setState({ loading: false });
      })
      .catch((error) => {
        // console.log("error", error);
        _self.processApiRequest();
        _self.callback({ type: "error", text: "API Server Error" });
        setState({ loading: false });
      });
  }
}

export default new Api();
