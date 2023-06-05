// import { config } from './../middleware';
import axios from 'axios';
import { setCookie, getCookie, removeCookies } from 'cookies-next';

const request = axios.create({
  baseURL: 'http://localhost:8000/api',
});

request.interceptors.request.use((config) => {
  //if it was not refresh token
  if (config.url !== '/get-new-token') {
    const accesstoken = getCookie('accesstoken');
    config.headers.Authorization = accesstoken;
  }
  return config;
});
request.interceptors.response.use(
  (res) => {
    console.log(res.data);
    
    return res
  },
  //401
  (error) => {
    const config = error.config;
    console.log('config ', config);
    if (error.response.status === 401 && !config.sent) {
      config.sent = true;
      if (config.url !== '/get-new-token') {
        const refreshToken = getCookie('refreshtoken');
        request
          .post(
            '/get-new-token',
            {},
            {
              headers: {
                Authorization: refreshToken,
              },
            }
          )
          .then((res) => {
            const accesstoken = res.data.accesstoken;
            setCookie('accesstoken', accesstoken);
            setCookie('refreshtoken', res.data.refreshtoken);
            config.headers.Authorization = accesstoken;
            return request(config);
          });
      } else if (config.url === '/get-new-token') {
        removeCookies('accesstoken');
        removeCookies('refreshtoken');
        location.href = '/admin/login';
      }
    }
  }
);
export default request;