import { loginActionCreator } from "../../features/authSlice/authSlice";
import { loginThunk } from "./authThunk";
import "../../../mocks/server";

jest.mock("jwt-decode", () => () => ({ username: "Marian" }));

describe("Given a authThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const expectedData = {
        username: "Marian",
      };
      const userData = {
        username: "Marian",
        password: "password",
      };

      const expectedAction = loginActionCreator(expectedData);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
