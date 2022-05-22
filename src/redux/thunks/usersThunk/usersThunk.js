import axios from "axios";
import { loadUsersActionCreator } from "../../features/usersSlice/usersSlice";

const API_URL = "https://two02204-w7chwe-marian-lopez.onrender.com";
export const loadUsersThunk = () => async (dispatch) => {
  const { data, status } = await axios.get(`${API_URL}/users/list`);

  const users = data.map((user) => ({
    ...user,
    image: `${API_URL}/${user.image}`,
  }));

  if (status === 200) {
    dispatch(loadUsersActionCreator(users));
  }
};
