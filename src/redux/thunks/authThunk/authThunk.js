import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  createdActionCreator,
  loginActionCreator,
} from "../../features/authSlice/authSlice";
import FormData from "form-data";

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
    const request = new FormData();
    if (image) request.append("image", image);
    if (name) request.append("name", name);

    if (username) request.append("username", username);
    if (password) request.append("password", password);

    const { data } = await axios.post(`${API_URL}/users/register`, request, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch(createdActionCreator(data));
  };
