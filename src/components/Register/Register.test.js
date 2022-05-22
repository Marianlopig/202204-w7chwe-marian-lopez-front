import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { registerThunk } from "../../redux/thunks/authThunk/authThunk";
import Register from "./Register";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/authThunk/authThunk", () => ({
  registerThunk: jest.fn(),
}));

describe("Given a Register component form", () => {
  describe("When it is rendered", () => {
    test("Then it should render a button and three inputs elements", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <Register />
          </Provider>
        </BrowserRouter>
      );
      const nameField = screen.getByPlaceholderText("Name");
      const usernameField = screen.getByPlaceholderText("Username");
      const passwordField = screen.getByPlaceholderText("Password");
      const imageField = screen.getByLabelText("Image:");
      const button = screen.getByRole("button");

      expect(nameField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(imageField).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should dispatch register Thunk", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <Register />
          </Provider>
        </BrowserRouter>
      );

      const expectedFormData = {
        name: "Marian",
        username: "marianlop",
        password: "password",
        image: "",
      };
      const nameField = screen.getByPlaceholderText("Name");
      const usernameField = screen.getByPlaceholderText("Username");
      const passwordField = screen.getByPlaceholderText("Password");
      const button = screen.getByRole("button");

      userEvent.type(nameField, "Marian");
      userEvent.type(passwordField, "password");
      userEvent.type(usernameField, "marianlop");
      userEvent.click(button);

      expect(registerThunk).toHaveBeenCalledWith(expectedFormData);
      expect(mockDispatch).toHaveBeenCalledWith(registerThunk());
    });
  });
});
