import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/authThunk/authThunk";
import { LoginFormStyles } from "./LoginFormStyles";

const LoginForm = () => {
  const blankData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankData);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "")
      setButtonDisabled(false);
    else {
      setButtonDisabled(true);
    }
  }, [formData]);
  const resetForm = () => {
    setFormData(blankData);
  };

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    resetForm();
    dispatch(loginThunk(formData));
    <Link to="/" />;
  };

  return (
    <LoginFormStyles>
      <div className="container">
        <h2>Insert your username and password</h2>
        <form autoComplete="off" noValidate onSubmit={submitLogin}>
          <label htmlFor="username">
            <input
              id="username"
              value={formData.username}
              onChange={changeData}
              placeholder="Name"
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={changeData}
              placeholder="Password"
            />
          </label>
          <div className="submitContainer">
            <button disabled={buttonDisabled}>LogIn</button>
          </div>
          <Link to="/create">Create an account</Link>
        </form>
      </div>
    </LoginFormStyles>
  );
};
export default LoginForm;
