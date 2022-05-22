import { loadUsersActionCreator } from "../../features/usersSlice/usersSlice";
import { loadUsersThunk } from "./usersThunk";
import "../../../mocks/server";

describe("Given a loadUsersThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadUsersActionCreator with the data from the api", async () => {
      const API_URL = "https://two02204-w7chwe-marian-lopez.onrender.com";
      const dispatch = jest.fn();
      const expectedData = [
        {
          name: "Marian",
          username: "marianlop",
          id: "1",
          image: `${API_URL}/marian.png`,
        },
      ];

      const expectedAction = loadUsersActionCreator(expectedData);

      const thunk = loadUsersThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
