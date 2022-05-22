import authReducer, { loginActionCreator } from "./authSlice";

describe("Given a authSlice with an loginActionCreator", () => {
  describe("When we do a login with a value username and a password", () => {
    test("Then it should return the username", () => {
      const userLoged = { username: "Marian" };
      const expectReturn = { username: "Marian" };
      const initialState = {};

      const action = loginActionCreator(userLoged);
      const newState = authReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});
