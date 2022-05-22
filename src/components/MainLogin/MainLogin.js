import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutActionCreator } from "../../redux/features/authSlice/authSlice";
import { MainLoginStyles } from "./MainLoginStyles";

const MainLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector(({ auth }) => {
    if (auth?.username) return true;
    else {
      return false;
    }
  });
  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    navigate("/");
    return;
  };

  return (
    <MainLoginStyles>
      <div className="container">
        <div className="buttons">
          {loggedIn ? (
            <button className="button button-logout" onClick={logOut}>
              LogOut
            </button>
          ) : (
            <button
              className="button button-login"
              onClick={() => navigate("/login")}
            >
              LogIn
            </button>
          )}
        </div>
      </div>
    </MainLoginStyles>
  );
};
export default MainLogin;
