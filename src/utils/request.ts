import axios from "axios"
import qs from "qs"
const baseUrl = import.meta.env.VITE_API

axios.interceptors.response.use((config) => {
  return config;
}, (error) => {
  if (error.message.includes("timeout")) {
    return Promise.reject(error);
  }
  if (error.response?.status === 401) {
    return Promise.reject(error);
  }
  return Promise.reject(error);
});
axios.defaults.timeout = 10000
const request = {
  post(url: string, data?: any, option?: { qsfy?: Boolean, params?: string }): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.post(url.startsWith('http') ? url : baseUrl + url + `${option?.params ? `?${option.params}` : ''}`, option?.qsfy ? qs.stringify(data) : data).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  },
  get(url: string, data?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.get(url.startsWith('http') ? url : baseUrl !== undefined ? baseUrl + url : url, {
        params: data
      })
        .then(response => {
          resolve(response.data)
          if (response.data.code == 500) {
            reject(response.data)
          }
        }, err => {
          reject(err)
        })
    })
  },
}
function getCookie(cname: string): string {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
export default request
export {
  getCookie
}