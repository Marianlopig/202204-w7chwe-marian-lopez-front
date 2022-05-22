import usersReducer, { loadUsersActionCreator } from "./usersSlice";

describe("Given a usersSlice with a loadusers reducer", () => {
  describe("When we pass a list of usres", () => {
    test("Then it should return the new state with users", () => {
      const initialValue = [];
      const receivedValue = [{ name: "marian", id: "1" }];

      const action = loadUsersActionCreator(receivedValue);
      const newState = usersReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});
