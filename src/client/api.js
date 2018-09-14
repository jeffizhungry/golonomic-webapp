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
    .then(response => {
      observer.next(response.data);
      observer.complete();
    })
    .catch(err => observer.error(err));
  })
};

export const getVersion = () => {
  return jsonRequest('GET', '/', null);
}

export const getSensor = () => {
  return jsonRequest('GET', '/sensor', null);
}

export const getPower = () => {
  return jsonRequest('GET', '/power', null);
}

export const vectorMove = (x, y, w) => {
  return jsonRequest('POST', '/vectormove', {
    x,
    y,
    w
  });
}

export const rcMode = (enabled) => {
  return jsonRequest('POST', '/rc', {
    enabled
  });
}

export const beaconMode = (enabled) => {
  return jsonRequest('POST', '/beacon', {
    enabled
  });
}

export const drivePattern = (p) => {
  if (p !== 'square' && p != 'roundedsquare') {
    // NOTE(Jeff): Not sure if this is the proper way to throw and error
    return Observable.create(observer => {
      observer.error('invalid pattern');
    })
  }
  return jsonRequest('POST', '/pattern', {
    enabled
  });
}
