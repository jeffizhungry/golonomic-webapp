import { Observable } from 'rxjs';
import axios from 'axios'

const host = "http://192.168.221.132:8080"

const jsonRequest = (method, route, data) => {
  return Observable.create(observer => {
    axios({
      method: method,
      url: host + route,
      data: data,
    })
    // .then(response => response.json())
    .then(response => {
      console.log('raw axios data:', response.data);
      observer.next(response.data);
      observer.complete();
    })
    .catch(err => observer.error(err));
  })
};

export const getUsername = () => {
  return jsonRequest('GET', '/api/getUsername', null);
}

export const getSensor = () => {
  return jsonRequest('GET', '/sensor', null);
}
