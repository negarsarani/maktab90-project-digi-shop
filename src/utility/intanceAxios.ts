// import { config } from './../middleware';
import axios from 'axios';
import { setCookie, getCookie, removeCookies } from 'cookies-next';
const request = axios.create({
  baseURL: 'http://localhost:8000/api',
});

request.interceptors.request.use((config) => {
  //if it was not refresh token
  if (config.url !== '/auth/token') {
    const accesstoken = getCookie('accesstoken');
    config.headers.Authorization = `Bearer ` + accesstoken;
  }
  return config;
});
request.interceptors.response.use(
  (res) => {

    return res;
  },
  // 401
  (error) => {
    const config = error.config;
    console.log('config ', config);
    if (error.response.status === 401 && !config.sent) {
      config.sent = true;
      if (config.url !== '/auth/token' && config.url !== '/auth/login') {
        const refreshToken = getCookie('refreshtoken');
        request.post('/auth/token', {refreshToken}).then((res) => {
          console.log(res);

          const accessToken = res?.data?.token?.accesstoken;
          setCookie('accesstoken', accessToken);
          // setCookie('refreshtoken', res.data.refreshtoken);
          config.headers.Authorization = `Bearer ` + refreshToken;
          return request(config);
        });
      } else if (config.url === '/auth/token') {
        removeCookies('accesstoken');
        removeCookies('refreshtoken');
        // location.href = '/admin/login';
      }
    }
  }
);
export default request;
