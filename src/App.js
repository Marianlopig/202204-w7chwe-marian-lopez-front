import { Navigate, Route, Routes } from "react-router";
import LoginForm from "./components/LoginForm/LoginForm";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
