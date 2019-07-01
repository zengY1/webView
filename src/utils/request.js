import axios from 'axios'
export default function request(option) {
  let { data, url, method = 'POST' } = option
  const timeout = 10000
  const headers = { "Content-Type": "application/json" };
  const options = {
    url: url,
    method: method,
    data: data,
  }
  const token = window.localStorage.getItem('token');
  axios.defaults.headers.common.accessToken = token
  if (method === "GET" || method === "DELETE") {
    options.params = data;
  } else {
    options.data = data;
  }
  return axios(options).then(response => {
    const { statusText, status, data } = response
    let result = {}
    if (typeof data === 'object') {
      result = data
      if (Array.isArray(data)) {
        result.list = data
      }
    } else {
      result.data = data
    }
    //返回体
    return Promise.resolve({
      message: statusText,
      statusCode: status,
      ...result,
    })
  }).catch(error => {
    const { response, message } = error
    let msg
    let statusCode

    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      msg = data.message || statusText
    } else {
      statusCode = 600
      msg = error.message || 'Network Error'
    }

    /* eslint-disable */
    return Promise.reject({
      statusCode,
      message: msg,
    })
  })
}