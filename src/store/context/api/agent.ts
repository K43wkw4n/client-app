import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://c85d-2403-6200-8860-d690-7c93-7e6a-1565-cfcb.ngrok-free.app/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, params: {}) => axios.post(url, params).then(responseBody),
  put: (url: string, params: {}) => axios.put(url, params).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  postForm: (url: string, data: FormData) =>
    axios
      .post(url, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody),
  putForm: (url: string, data: FormData) =>
    axios
      .put(url, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody),
};

const Account = {
  login: (values: any) => requests.post("api/Auth/Login", values),
  register: (values: any) => requests.post("api/Auth/Register", values),
  getCurrentUser: (values: any) => requests.post("api/Auth/Register", values),
  //   currentUser: () => requests.get("account/currentUser"),
};

const Coupons = {
  list: () => requests.get("api/Coupon/GetCoupon"),
};

const Products = {
  productList: () => requests.get("api/Product/GetProduct"),
};

const agent = {
  Account,
  Coupons,
  Products,
};

export default agent;
