import { Observable } from 'rxjs';

const host = "http://localhost:3000"

const jsonRequest = (route) => {
  return Observable.create(observer => {
    fetch(host + route)
      .then(response => response.json())
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch(err => observer.error(err));
  })
};

export const getUsername = () => {
  return jsonRequest('/api/getUsername')
}
