import axios from "axios";
import jwt_decode from "jwt-decode";
import { loginActionCreator } from "../../features/authSlice/authSlice";

const API_URL = "https://two02204-w7chwe-marian-lopez.onrender.com";

export const loginThunk = (userData) => async (dispatch) => {
  const { data, status } = await axios.post(`${API_URL}/users/login`, userData);

  if (status === 200) {
    const userInfo = jwt_decode(data.token);
    localStorage.setItem("token", data.token);
    dispatch(loginActionCreator({ username: userInfo.username }));
  }
};

export const registerThunk =
  ({ username, password, name, image }) =>
  async (dispatch) => {
    const body = {
      username,
      password,
      name,
      image,
    };
    await axios.post(`${API_URL}/users/register`, body);
  };
