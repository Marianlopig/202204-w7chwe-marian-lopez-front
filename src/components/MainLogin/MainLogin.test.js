import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import MainLogin from "./MainLogin";

describe("Given a Login form component", () => {
  describe("When it is rendered and user is not logged", () => {
    test("Then it should render a login button", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <MainLogin />
          </Provider>
        </BrowserRouter>
      );
      const login = screen.getByText("LogIn");

      expect(login).toBeInTheDocument();
    });
  });
  describe("When it is rendered and user is logged in", () => {
    test("Then it should render a logout button", () => {
      render(
        <BrowserRouter>
          <Provider
            store={{
              ...store,
              getState: () => ({ auth: { username: "Marian" } }),
            }}
          >
            <MainLogin />
          </Provider>
        </BrowserRouter>
      );
      const logout = screen.getByText("LogOut");

      expect(logout).toBeInTheDocument();
    });
  });
});
