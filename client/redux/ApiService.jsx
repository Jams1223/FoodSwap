const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";
const SERVER_URL = `${BASE_URL}/api`;

export const axiosRequest = async (method, basicUrl, data = null) => {
  let URL = `${SERVER_URL}/${basicUrl}`;
  return Axios({
    method: method,
    url: URL,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  })
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};
