import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginForm from "./LoginForm";
import store from "../../redux/store/store";

describe("Given a Login form component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a button, two inputs element", () => {
      render(
        <Provider store={{ ...store }}>
          <LoginForm />
        </Provider>
      );
      const userField = screen.getByPlaceholderText("Name");
      const passwordField = screen.getByPlaceholderText("Password");
      const button = screen.getByRole("button");

      expect(userField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
