import { Navigate, Route, Routes } from "react-router";
import LoginForm from "./components/LoginForm/LoginForm";
import Register from "./components/Register/Register";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
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
