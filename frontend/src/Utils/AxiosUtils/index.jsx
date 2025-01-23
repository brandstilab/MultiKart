import axios from "axios";
import getCookie from "../CustomFunctions/GetCookie";
import Cookies from "js-cookie";

const client = axios.create({
  baseURL: process.env.API_PROD_URL,
  headers: {
    Accept: "application/json",
  },
});

// const request = async ({ ...options }, router) => {
//   client.defaults.headers.common.Authorization = `Bearer ${getCookie("uat")}`;
//   const onSuccess = (response) => response;
//   const onError = (error) => {
//     if (error?.response?.status == 403) {
//       router && router.push("/403");
//     }

//     return error;
//   };
//   try {
//     const response = await client(options);
//     return onSuccess(response);
//   } catch (error) {
//     return onError(error);
//   }
// };

// export default request;


const request = async ({ ...options }, router) => {
  client.defaults.headers.common.Authorization = `Bearer ${getCookie("uat")}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error?.response?.status == 401) {
      Cookies.remove("uat");
      Cookies.remove("ue");
      Cookies.remove("account");
      localStorage.clear();
      router && router.push("/404");
    }
    // router && router.push('/404')
    return error;
  };
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default request;
