import axios from "axios";

export function myInterceptor() {
  axios.interceptors.request.use((req) => {
    req.headers.authorization = "my secret token";
    return req;
  });
}

export function myInterceptor2() {
  axios.interceptors.response.use((res) => {
    console.log("response interceptor");
    return res;
  });
}
