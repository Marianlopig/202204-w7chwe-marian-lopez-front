import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/thunks/authThunk/authThunk";
import { RegisterStyles } from "./RegisterStyles";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    image: null,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username !== "" && user.password !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerThunk(user));
    navigate("/");
  };

  return (
    <RegisterStyles>
      <div className="container">
        <h2>Create a new account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              id="name"
              type="text"
              value={user.name}
              onChange={(event) => handleChange(event)}
              placeholder="Name"
              autoComplete="off"
            />
          </label>
          <label>
            Username:
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(event) => handleChange(event)}
              placeholder="Username"
              autoComplete="off"
            />
          </label>
          <label>
            password:
            <div className="slider">
              <input
                id="password"
                type="password"
                value={user.password}
                onChange={(event) => handleChange(event)}
                placeholder="Password"
                autoComplete="off"
              />
            </div>
          </label>
          <label>
            Image:
            <div className="slider">
              <input
                id="image"
                type="file"
                accept="image/png, image/jpg"
                onChange={(event) => {
                  setUser({
                    ...user,
                    [event.target.id]: event.target.files[0],
                  });
                }}
              />
            </div>
          </label>
          <div className="submitContainer">
            <input type="submit" value="Submit" disabled={buttonDisabled} />
          </div>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
    </RegisterStyles>
  );
};

export default Register;
