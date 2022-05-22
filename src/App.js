import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import LoginForm from "./components/LoginForm/LoginForm";
import Register from "./components/Register/Register";
import UserList from "./components/UserList/UserList";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { loginActionCreator } from "./redux/features/authSlice/authSlice";
import MainLogin from "./components/MainLogin/MainLogin";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo = jwt_decode(token);
      dispatch(loginActionCreator({ username: userInfo.username }));
      navigate("/list");
    }
  }, [dispatch, navigate]);

  return (
    <div className="App">
      <MainLogin />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create" element={<Register />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
